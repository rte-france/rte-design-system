/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { MenuNavItem } from '@/shared/types/MenuNavItem.type';
import { ItemStyleConfig } from './StdNavbar';
import StdNavbarMenuItem from './StdNavbarMenuItem';

type StdNavbarMenuProps = {
  menuItems: MenuNavItem[];
  expanded?: boolean;
  itemsStyleConfig?: {
    itemContent?: ItemStyleConfig;
    itemBackground?: ItemStyleConfig;
  };
};

const StdNavbarMenu = ({ menuItems, expanded = true, itemsStyleConfig = {} }: StdNavbarMenuProps) => (
  <section>
    {menuItems.map((item) => (
      <StdNavbarMenuItem item={item} key={item.key} expanded={expanded} itemsStyleConfig={itemsStyleConfig} />
    ))}
  </section>
);

export default StdNavbarMenu;
