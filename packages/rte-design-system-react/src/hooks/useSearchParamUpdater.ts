/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchParamUpdater = () => {
  const [, setSearchParams] = useSearchParams();

  const setSearchParam = useCallback(
    (paramName: string, value?: string) => {
      setSearchParams((params) => {
        const newParams = new URLSearchParams(params);

        if (value) {
          newParams.set(paramName, String(value));
        } else {
          newParams.delete(paramName);
        }

        return newParams;
      });
    },
    [setSearchParams],
  );

  return { setSearchParam };
};
