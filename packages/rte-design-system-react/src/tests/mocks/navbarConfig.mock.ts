/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { HeaderStyleLogoConfig, HeaderStyleTextConfig } from '@/template/rdsNavbar/navbar.type.tsx';

export const TEST_TEXT_HEADER_CONFIG: HeaderStyleTextConfig = {
  variant: 'text',
  appTwoLetters: 'DS',
  appVersion: 'v3.0',
  appName: 'RteDS',
  headerLink: '/',
  headerId: 'test-id',
  versionTextColor: 'gray-600',
};

export const TEST_LOGO_HEADER_CONFIG: HeaderStyleLogoConfig = {
  variant: 'logo',
  appName: 'RteDS',
  appVersion: 'v3.0',
  headerLink: '/',
  headerId: 'test-id',
  versionTextColor: 'gray-600',
  logoConfig: {
    logoCollapsedHref: '/logo-collapsed.svg',
    logoCollapsedId: 'logo-collapsed-id',
    logoExpandedHref: '/logo-expanded.svg',
    logoExpandedId: 'logo-expanded-id',
  },
};
