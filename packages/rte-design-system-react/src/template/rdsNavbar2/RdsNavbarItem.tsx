/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIcon } from '@/components/index.ts';
import { RdsIconIdKey } from '@/utils/index.ts';
import { useContext } from 'react';
import { NavbarContext } from '../rdsNavbar/navbarContext.ts';
import { navbarItemClassBuilder } from './navbarClassBuilder.ts';

type RdsNavbarItemProps = {
  nameIcon: RdsIconIdKey;
  name: string;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
};

export const RdsNavbarItem = (props: RdsNavbarItemProps) => {
  const { nameIcon, name, onClick, active = false, disabled = false } = props;
  const { expanded } = useContext(NavbarContext);
  const classes = navbarItemClassBuilder(expanded, active, disabled);
  return (
    <div className={classes} role="button" onClick={onClick} tabIndex={1}>
      <RdsIcon name={nameIcon} />
      <p className="rds-overflow-hidden rds-text-ellipsis rds-text-nowrap">{name}</p>
    </div>
  );
};

export default RdsNavbarItem;
