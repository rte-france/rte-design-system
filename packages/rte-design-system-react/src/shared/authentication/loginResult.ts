/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { User } from '@/shared/types/User.type';
import { getOpenerOrigin } from './utils';

export type ServerError = {
  timestamp: string;
  status: number;
  error: string;
  exception: string;
  message: string;
  path: string;
};

export type LoginResultError = {
  result: 'error';
  type:
    | 'connect-no-code-challenge'
    | 'connect-unknown-error'
    | 'callback-no-code'
    | 'callback-no-code-challenge'
    | 'callback-no-token'
    | 'callback-authenticate-error'
    | 'callback-unkown-error';
  error?: ServerError | string;
};

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};

export const getJsonServerError = async (response: Response): Promise<ServerError | undefined> => {
  if (response.headers.get('Content-Type') == 'application/json') {
    return (await response.json()) as ServerError;
  }
  return undefined;
};

export type LoginResultSuccess = {
  result: 'success';
  user: User;
  token: string;
};

export type LoginResult = LoginResultError | LoginResultSuccess;

export const postLoginResultMessage = (result: LoginResult) => {
  const openerWindow = (window.opener || window.parent) as Window;
  openerWindow.postMessage(result, getOpenerOrigin());
};
