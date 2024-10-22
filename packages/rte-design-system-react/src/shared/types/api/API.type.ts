/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export interface BackResponseOK<T> {
  data: T;
  inError: false;
}
export interface BackResponseKO {
  inError: true;
}
export type BackResponse<T> = BackResponseKO | BackResponseOK<T>;

export interface APIResponse<T> {
  data: T;
  status: number;
}
