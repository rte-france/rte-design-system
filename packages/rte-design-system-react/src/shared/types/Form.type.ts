/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export type FormDataKO<T> = {
  errorMsg: string;
  isValid: false;
  formData?: T;
};

export type FormDataOK<T> = {
  isValid: true;
  formData?: T;
};

export type FormData<T> = FormDataOK<T> | FormDataKO<T>;

export type FormStore = Record<string, FormData<unknown>>;
