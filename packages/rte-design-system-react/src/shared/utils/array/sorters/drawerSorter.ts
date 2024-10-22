/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PageData } from '@/appIndex';

const drawerSorter = (item1: PageData, item2: PageData) => {
  if (!item1.settings.drawerIndex || !item2.settings.drawerIndex) return -1;
  return item1.settings.drawerIndex < item2.settings?.drawerIndex ? -1 : 1;
};

export default drawerSorter;
