/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const units = ['B', 'KB', 'MB', 'GB', 'TB'];

const BASE = 1000;

export const getHumanSize = (value: number) => {
  const exp = Math.min(Math.floor(Math.log(value) / Math.log(BASE)), units.length - 1);
  return {
    value: exp < 1 ? value : (value / BASE ** exp).toFixed(0),
    unit: units[Math.min(exp, units.length - 1)],
  };
};
