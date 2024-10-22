/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

export const getTimeString = (seconds: number) => {
  const hours = Math.floor(seconds / SECONDS_IN_HOUR);
  const minutes = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  return `${hours}h${minutes.toString().padStart(2, '0')}`;
};
