/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { callAndCatchError } from '@/shared/api/api';
import { BackResponse } from '@/shared/types/api/API.type';
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponseHeaders } from 'axios';

const DATE_REGEX = /^[+-]?\d{4,6}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;

const dateReviver = (data: string) =>
  JSON.parse(data, (_key: string, value: unknown) => {
    if (typeof value === 'string' && value.match(DATE_REGEX)) {
      return new Date(value);
    }
    return value;
  }) as unknown;

function jsonDateTransformer(data: unknown, headers: AxiosResponseHeaders, _status?: number): unknown {
  if (headers['content-type'] === 'application/json') {
    return dateReviver(data as string);
  }
  return data;
}

export class HttpClientService {
  private client: AxiosInstance;

  constructor(clientInit: AxiosInstance) {
    this.client = clientInit;
    this.client.defaults.transformResponse = [jsonDateTransformer];
  }

  setToken(token: string | undefined) {
    this.client.defaults.headers.common.Authorization = token;
  }

  setAxiosInterceptor = (errorCallbacks: Record<number, (error: AxiosError) => void>): void => {
    this.client.interceptors.response.use(
      (c) => c,
      async (error: AxiosError) => {
        if (error?.response?.status && error?.response?.status in errorCallbacks) {
          errorCallbacks[error?.response?.status](error);
        }
        return Promise.reject(error);
      },
    );
  };

  async executeRequest<T>(
    configRequest: AxiosRequestConfig,
    errorMessage?: string,
  ): Promise<BackResponse<T> | undefined> {
    return await callAndCatchError(() => this.client(configRequest), errorMessage);
  }
}
