/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconIdKey } from '@/utils/index.ts';
import RdsNavbarItem from './RdsNavbarItem.tsx';
export type NavbarItemContent = {
  icon: RdsIconIdKey;
  name: string;
  location: string;
};
export type RdsNavbarItemListProps = {
  items: NavbarItemContent[];
  navigate: (location: string) => void;
};

export const RdsNavbarItemList = (props: RdsNavbarItemListProps) => {
  const { items, navigate } = props;

  return (
    <>
      {items.map((item) => (
        <RdsNavbarItem key={item.name} nameIcon={item.icon} name={item.name} onClick={() => navigate(item.location)} />
      ))}
    </>
  );
};

export default RdsNavbarItemList;
