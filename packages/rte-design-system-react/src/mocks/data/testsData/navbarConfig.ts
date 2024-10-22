/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { HeaderStyleLogoConfig, HeaderStyleTextConfig } from '@/components/common/layout/stdNavbar/StdNavbar';

export const TEST_TEXT_HEADER_CONFIG: HeaderStyleTextConfig = {
  variant: 'text',
  appTwoLetters: 'IG',
  appVersion: 'v3.0',
  appName: 'Imagrid',
  headerLink: '/',
  headerId: 'test-id',
  versionTextColor: 'gray-600',
};

export const TEST_LOGO_HEADER_CONFIG: HeaderStyleLogoConfig = {
  variant: 'logo',
  appName: 'Imagrid',
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
