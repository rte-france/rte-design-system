/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useContext } from 'react';
import { NavbarContext } from '../rdsNavbar/navbarContext.ts';
import { RdsTextTooltip } from '@/components/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import i18n from '@/i18n.ts';
import RdsNavbarItem from './RdsNavbarItem.tsx';

export const RdsNavbarFooter = () => {
  const { setExpanded, expanded } = useContext(NavbarContext);
  const label = expanded ? i18n.t('components.navbar.@minimize') : i18n.t('components.navbar.@expand');
  const toggleSwitch = () => {
    setExpanded((b) => !b);
  };
  return (
    <div className="rds-flex rds-justify-center">
      {expanded ? (
        <RdsNavbarItem name={label} nameIcon={RdsIconId.KeyboardDoubleArrowLeft} onClick={toggleSwitch} />
      ) : (
        <RdsTextTooltip text={label} enabled={!expanded} placement="right" disableArrow>
          <RdsNavbarItem name={label} nameIcon={RdsIconId.KeyboardDoubleArrowRight} onClick={toggleSwitch} />
        </RdsTextTooltip>
      )}
    </div>
  );
};

export default RdsNavbarFooter;
