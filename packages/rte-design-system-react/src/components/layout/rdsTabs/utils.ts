/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsTabItemProps } from './RdsTabItem.tsx';

export const buildSecondaryTabsState = (items: Omit<RdsTabItemProps, 'onClick' | 'tabType'>[]) =>
  items.reduce(
    (acc, item) => {
      if (item.secondary && item.secondary[0]) {
        const secondaryActiveItem = item.secondary.find((itm) => itm.active);
        acc[item.name] = secondaryActiveItem?.name || item.secondary[0].name;
        return acc;
      }
      return acc;
    },
    {} as Record<string, string>,
  );
