/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { parseJSON } from '@/shared/utils/parseJSON';
import { useCallback, useState } from 'react';
export type StorageType = 'localStorage' | 'sessionStorage';

const ClientStorageParamsType = {
  localStorage,
  sessionStorage,
} as const;

export type ClientStorageParamsType<T> = { key: string; storage: StorageType; defaultValue?: T };

export const useClientStorage = <T>({ key, storage, defaultValue }: ClientStorageParamsType<T>) => {
  const readStoredValue = useCallback(() => {
    const storedSerialisable = ClientStorageParamsType[storage].getItem(key);
    const parsedValue = parseJSON<T>(storedSerialisable);
    return parsedValue ?? defaultValue;
  }, [defaultValue, key, storage]);

  const [storedValue, setStoredValue] = useState(readStoredValue());

  const setValue: typeof setStoredValue = useCallback(
    (value) => {
      setStoredValue((oldValue) => {
        const newValue = value instanceof Function ? value(oldValue) : value;
        try {
          ClientStorageParamsType[storage].setItem(key, JSON.stringify(newValue));
        } catch {
          ClientStorageParamsType[storage].setItem(key, JSON.stringify(defaultValue));
        }
        return newValue;
      });
    },
    [key, storage, defaultValue],
  );

  const remove = useCallback(() => {
    ClientStorageParamsType[storage].removeItem(key);
  }, [key, storage]);

  return { value: storedValue, setValue, remove };
};
