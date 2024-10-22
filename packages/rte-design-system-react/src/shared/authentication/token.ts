/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const openidTokenKey = 'openid_token';

export const getOpenIdToken = () => localStorage.getItem(openidTokenKey);
export const setOpenIdToken = (token: string) => localStorage.setItem(openidTokenKey, token);
