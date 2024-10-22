/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { APIResponse, BackResponse } from '@/shared/types/api/API.type';
import { noop } from '../utils/defaultUtils';

const parseError = (_e: unknown, _errorMessage: string | undefined) => {};

export const hasProperties = <T extends string>(obj: unknown, key: T): obj is Record<T, unknown> =>
  typeof obj === 'object' && !!obj && key in obj;

export const callPromiseWithCancel = <T>(promise: Promise<T>): { promise: Promise<T>; cancel: () => void } => {
  const token = { cancel: noop };
  const cancelPromise = new Promise<T>((_, rejectPromise) => {
    token.cancel = () => {
      rejectPromise(new Error('Promise canceled'));
    };
  });

  return { promise: Promise.race([cancelPromise, promise]), cancel: token.cancel };
};

export const makeCall = async <T>(
  callable: () => Promise<APIResponse<T>>,
  errorParser: (e: unknown) => void,
): Promise<BackResponse<T>> => {
  try {
    return { data: (await callable())?.data, inError: false };
  } catch (e: unknown) {
    if (hasProperties(e, 'response') && hasProperties(e.response, 'status') && e.response.status !== 403) {
      errorParser(e);
    }
    return { inError: true };
  }
};

export const callAndCatchError = async <T>(
  callable: () => Promise<APIResponse<T>>,
  errorMessage?: string,
): Promise<BackResponse<T>> => {
  const parser = (e: unknown) => parseError(e, errorMessage);
  return makeCall(callable, parser);
};
