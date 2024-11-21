/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { MenuNavItem } from '@/types/template/menuNavItem.type.ts';
import { RdsIconId } from '@/utils/index.ts';

export const menuTopData: MenuNavItem[] = [
  {
    id: 'home-link',
    key: 'home',
    label: 'Accueil',
    path: '/',
    icon: RdsIconId.Home,
  },
];

export const menuBottomData: MenuNavItem[] = [
  {
    key: 'account',
    label: 'Mon compte',
    path: '/account',
    icon: RdsIconId.AccountCircle,
  },
  {
    key: 'help',
    label: 'Aide',
    path: '/help',
    icon: RdsIconId.Help,
  },
  {
    key: 'admin',
    label: 'Administration',
    path: '/admin',
    icon: RdsIconId.Settings,
  },
  {
    key: 'logout',
    label: 'Se déconnecter',
    path: '/',
    icon: RdsIconId.Logout,
  },
];
