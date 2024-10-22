/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const MAXIMUM_BADGE_VALUE = 100;

export const getDisplayedText = (nbNotif: number) => {
  if (nbNotif <= 0) {
    return '';
  }
  return nbNotif < MAXIMUM_BADGE_VALUE ? nbNotif.toString() : '+99';
};
