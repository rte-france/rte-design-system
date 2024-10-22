/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/**
 * A wrapper for "JSON.parse()"" to support "undefined" value
 * @param value
 * @returns
 */
export const parseJSON = <T>(value: string | null): T | undefined => {
  try {
    return JSON.parse(value ?? '') as T;
  } catch {
    return undefined;
  }
};
