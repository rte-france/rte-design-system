/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const generateFixedDate = (dateIdx: number) => new Date(Math.floor(dateIdx * 1710000000000));

export const randomDate = () => generateFixedDate(Math.random());
