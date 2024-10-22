/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { callPromiseWithCancel } from '@/shared/api/api';
import { BackResponse } from '@/shared/types/api/API.type';
import { noop } from '@/shared/utils/defaultUtils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { UseApiOptions, useApi } from './useAPI';

export const useApiWithParser = <TApiResult, TMapperResult>(
  api: () => Promise<BackResponse<TApiResult>>,
  parser: (item: TApiResult) => Promise<TMapperResult>,
  options: UseApiOptions = {},
): { response: TMapperResult | undefined; reload: () => void; loading: boolean; clear: () => void } => {
  const { response, reload, loading: loadingApi, clear } = useApi(api, options);
  const [parsedResponse, setParsedResponse] = useState<TMapperResult>();
  const [loading, setLoading] = useState<boolean>(false);
  const cancelPromiseParse = useRef(noop);

  const parseResponseCaller = useCallback(async () => {
    if (!response) {
      setParsedResponse(undefined);
    } else {
      setLoading(true);
      const { promise, cancel } = callPromiseWithCancel<TMapperResult>(parser(response));
      cancelPromiseParse.current = cancel;
      let newParsedResponse: TMapperResult;
      try {
        newParsedResponse = await promise;
        setParsedResponse(newParsedResponse);
      } catch (error: unknown) {
        if (error) {
          console.error('UnCatch error during called Promise', error); // eslint-disable-line
        }
      }
      setLoading(false);
    }
  }, [response, parser]);

  useEffect(() => {
    parseResponseCaller().catch(() => {});
    return () => cancelPromiseParse.current();
  }, [parseResponseCaller]);

  return { response: parsedResponse, reload, loading: loading || loadingApi, clear };
};
