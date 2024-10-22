/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export enum PageList {
  HOME = 'home',
  SETTINGS = 'settings',
  ADMIN = 'admin',
  DASHBOARD = 'dashboard',
  BROWSER = 'browser',
}

export interface PageSettings {
  drawerDisplay: 'top' | 'bottom' | 'hide';
  drawerIndex?: number;
}

export interface PageData {
  pageId: PageList;
  title: string;
  IconComponent?: React.FC;
  settings: PageSettings;
  path: string;
}

export const PAGE_INDEX: Record<PageList, PageData> = {
  [PageList.HOME]: {
    pageId: PageList.HOME,
    title: 'Home Page',
    settings: { drawerDisplay: 'top', drawerIndex: 1 },
    path: '/',
  },
  [PageList.SETTINGS]: {
    pageId: PageList.SETTINGS,
    title: 'Settings',
    settings: { drawerDisplay: 'bottom', drawerIndex: 1 },
    path: '/settings',
  },
  [PageList.ADMIN]: {
    pageId: PageList.ADMIN,
    title: 'Admin Board',
    settings: { drawerDisplay: 'bottom', drawerIndex: 2 },
    path: '/admin',
  },
  [PageList.DASHBOARD]: {
    pageId: PageList.DASHBOARD,
    title: 'Dashboard',
    settings: { drawerDisplay: 'top', drawerIndex: 2 },
    path: '/dashboard',
  },
  [PageList.BROWSER]: {
    pageId: PageList.BROWSER,
    title: 'Browser',
    settings: { drawerDisplay: 'top', drawerIndex: 3 },
    path: '/browser',
  },
};
