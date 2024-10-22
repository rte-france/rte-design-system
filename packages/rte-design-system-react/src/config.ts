/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const {
  VITE_SERVER_ORIGIN,
  VITE_OPEN_ID_SERVER_ORIGIN,
  VITE_OPEN_ID_CONNECT_CALLBACK_PATH,
  VITE_OPEN_ID_CONNECT_PATH,
} = import.meta.env;

const openIdServerOrigin = (VITE_OPEN_ID_SERVER_ORIGIN as string) || window.location.origin;
const serverOrigin = (VITE_SERVER_ORIGIN as string) || window.location.origin;
const restApiPath = '/imagrid-server/rest';

const config = {
  serverOrigin,
  restApiPath,
  restApiUrl: serverOrigin + restApiPath,
  websocketUrl: serverOrigin.replace('http', 'ws') + '/imagrid-server/ws/afs/v2',
  openIdConnectCallbackUrl: openIdServerOrigin + VITE_OPEN_ID_CONNECT_CALLBACK_PATH!,
  openIdConnectUrl: openIdServerOrigin + VITE_OPEN_ID_CONNECT_PATH!,
} as const;

export default config;
