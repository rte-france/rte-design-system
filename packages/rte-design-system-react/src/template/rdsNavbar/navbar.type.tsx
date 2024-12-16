/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { NO_PREFIX, TailwindColorClass } from '@/types/TailwindColorClass.type.ts';
import { PseudoClassColorMapper } from '@/utils/index.ts';

export type NavbarConfig = {
  header: HeaderStyleConfig;
  itemContent?: ItemStyleConfig;
  itemBackground?: ItemStyleConfig;
  separatorColor?: TailwindColorClass;
  textColor?: TailwindColorClass;
};

export type LogoConfig = {
  logoExpandedHref: string;
  logoExpandedId: string;
  logoCollapsedHref: string;
  logoCollapsedId: string;
};

type HeaderCommonConfig = {
  versionTextColor: TailwindColorClass;
  appName: string;
  appVersion: string;
  headerLink: string;
  headerId: string;
};

export type HeaderStyleLogoConfig = {
  variant: 'logo';
  logoConfig: LogoConfig;
} & HeaderCommonConfig;

export type HeaderStyleTextConfig = {
  variant: 'text';
  appTwoLetters: string;
  twoLettersBackground?: TailwindColorClass;
  twoLettersColor?: TailwindColorClass;
} & HeaderCommonConfig;

export type HeaderStyleConfig = HeaderStyleLogoConfig | HeaderStyleTextConfig;

export type ItemStyleConfig = PseudoClassColorMapper & {
  [NO_PREFIX]: TailwindColorClass;
};
