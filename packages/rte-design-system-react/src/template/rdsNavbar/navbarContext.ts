/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { createContext, Dispatch, SetStateAction } from 'react';
import { NavbarConfig } from './navbar.type.tsx';
import { noop } from '@/utils/index.ts';

type NavbarContextType = {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  config?: NavbarConfig;
};

export const NavbarContext = createContext<NavbarContextType>({
  expanded: false,
  setExpanded: noop,
});
