/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { callPromiseWithCancel } from '@/shared/api/api';
import { BackResponse } from '@/shared/types/api/API.type';
import { noop } from '@/shared/utils/defaultUtils';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseApiOptions {
  skipFirstInit?: boolean;
  autoCall?: boolean;
}
export const useApi = <TApiResult>(
  api: () => Promise<BackResponse<TApiResult>>,
  options: UseApiOptions = {},
): { response: TApiResult | undefined; reload: () => void; loading: boolean; clear: () => void } => {
  const allOptions = { skipFirstInit: true, autoCall: true, ...options };
  const [response, setResponse] = useState<TApiResult>();
  const [loading, setLoading] = useState<boolean>(!allOptions.skipFirstInit);
  const optionsRef = useRef<UseApiOptions>(allOptions);
  const cancelPromise = useRef(noop);

  const callApi = useCallback(async () => {
    setLoading(true);

    const { promise, cancel } = callPromiseWithCancel(api());
    cancelPromise.current = cancel;

    let backResponse: null | BackResponse<TApiResult> = null;
    try {
      backResponse = await promise;
      setResponse(!backResponse.inError ? backResponse.data : undefined);
    } catch (error: unknown) {
      if (error) {
        console.error('UnCatch error during called Promise', error); // eslint-disable-line
      }
    }
    setLoading(false);
  }, [api]);

  useEffect(() => {
    if (optionsRef.current.skipFirstInit) {
      optionsRef.current.skipFirstInit = false;
    } else if (optionsRef.current.autoCall) {
      callApi().catch(() => {});
    }
    return () => cancelPromise.current();
  }, [callApi]);

  const reload = useCallback(() => {
    callApi().catch(() => {});
  }, [callApi]);

  const clear = useCallback(() => setResponse(undefined), []);

  return { response, reload, loading, clear };
};
