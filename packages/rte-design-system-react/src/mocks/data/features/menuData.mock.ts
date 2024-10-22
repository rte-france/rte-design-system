/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { MenuNavItem } from '@/shared/types/MenuNavItem.type';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';

export const menuTopData: MenuNavItem[] = [
  {
    id: 'home-link',
    key: 'home',
    label: 'Accueil',
    path: '/',
    icon: StdIconId.Home,
  },
  {
    id: 'projects-link',
    key: 'projects',
    label: 'Projets',
    path: '/projects',
    icon: StdIconId.Folder,
  },
  {
    id: 'store-link',
    key: 'objects-store',
    label: "Magasin d'objets",
    path: '/objects-store',
    icon: StdIconId.Storefront,
  },
  {
    id: 'logbook-link',
    key: 'logbook',
    label: 'Journal',
    path: '/',
    icon: StdIconId.ImportContacts,
  },
  {
    id: 'downloads-link',
    key: 'downloads',
    label: 'Téléchargements',
    path: '/downloads',
    icon: StdIconId.Download,
  },
  {
    id: 'comparator-link',
    key: 'comparator',
    label: 'Comparateur',
    path: '/',
    icon: StdIconId.Compare,
  },
];

export const menuBottomData: MenuNavItem[] = [
  {
    key: 'account',
    label: 'Mon compte',
    path: '/account',
    icon: StdIconId.AccountCircle,
  },
  {
    key: 'help',
    label: 'Aide',
    path: '/help',
    icon: StdIconId.Help,
  },
  {
    key: 'admin',
    label: 'Administration',
    path: '/admin',
    icon: StdIconId.Settings,
  },
  {
    key: 'logout',
    label: 'Se déconnecter',
    path: '/',
    icon: StdIconId.Logout,
  },
];
