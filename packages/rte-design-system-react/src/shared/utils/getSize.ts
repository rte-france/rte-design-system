/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const units = ['B', 'KB', 'MB', 'GB', 'TB'];

export const getSize = (value: number) => {
  const exp = Math.min(Math.floor(Math.log(value) / Math.log(1024)), units.length);
  return {
    value: exp < 1 ? value : (value / 1024 ** exp).toFixed(0),
    unit: units[Math.min(exp, units.length - 1)],
  };
};
