/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { MenuNavItem } from '@/types/template/menuNavItem.type.ts';
import { ItemStyleConfig } from './navbar.type.tsx';
import { useRdsId } from '@/hooks/index.ts';
import { navbarItemClassBuilder } from './navbarClassBuilder.ts';
import { RdsIcon, RdsTextTooltip } from '@/components/index.ts';
import { Link } from 'react-router-dom';

type RdsNavbarMenuItemProps = {
  item: MenuNavItem;
  expanded?: boolean;
  selected?: boolean;
  itemsStyleConfig: {
    itemContent?: ItemStyleConfig;
    itemBackground?: ItemStyleConfig;
  };
};

export const RdsNavbarMenuItem = ({
  item,
  expanded = true,
  selected = false,
  itemsStyleConfig,
}: RdsNavbarMenuItemProps) => {
  const id = useRdsId('navbar-item', item.id);
  const { path, key, icon, label } = item;
  const navbarMenuItemClasses = navbarItemClassBuilder(
    selected,
    expanded,
    itemsStyleConfig.itemBackground,
    itemsStyleConfig.itemContent,
  );

  return (
    <RdsTextTooltip text={label} placement="right" enabled={!expanded} disableArrow>
      <Link to={path} className={navbarMenuItemClasses} key={key} id={id}>
        <RdsIcon name={icon} />
        {expanded && label}
      </Link>
    </RdsTextTooltip>
  );
};

export default RdsNavbarMenuItem;
