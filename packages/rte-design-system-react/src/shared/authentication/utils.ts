/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const CODE_CHALLENGE_PARAM = 'code_challenge';
export const OPENER_ORIGIN_PARAM = 'opener_origin';

const LOGIN_OPENER_ORIGIN_KEY = 'login_opener_origin';

export const storeOpenerOrigin = () => {
  const openerOrigin = new URLSearchParams(window.location.search).get(OPENER_ORIGIN_PARAM);
  if (openerOrigin !== null) {
    localStorage.setItem(LOGIN_OPENER_ORIGIN_KEY, openerOrigin);
  }
};

export const getOpenerOrigin = () => {
  const openerOrigin = localStorage.getItem(LOGIN_OPENER_ORIGIN_KEY);
  if (openerOrigin == null) {
    return window.location.origin;
  }
  const openerOriginUrl = new URL(openerOrigin);
  if (openerOriginUrl.hostname === 'localhost') {
    return openerOriginUrl.origin;
  } else if (openerOriginUrl.origin === window.location.origin) {
    return openerOriginUrl.origin;
  }
  return window.location.origin;
};
