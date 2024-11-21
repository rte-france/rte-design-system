/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId } from '@/utils/index.ts';
import { ItemStyleConfig } from './navbar.type.tsx';
import { navbarControllerClassBuilder } from './navbarClassBuilder.ts';
import { RdsIcon, RdsTextTooltip } from '@/components/index.ts';

type RdsNavbarControllerProps = {
  id: string;
  label: string;
  action: () => void;
  expanded?: boolean;
  itemsStyleConfig: {
    itemContent?: ItemStyleConfig;
    itemBackground?: ItemStyleConfig;
  };
};

export const RdsNavbarController = ({
  label,
  id,
  action,
  expanded = true,
  itemsStyleConfig,
}: RdsNavbarControllerProps) => {
  const navbarControllerClasses = navbarControllerClassBuilder(
    expanded,
    itemsStyleConfig.itemBackground,
    itemsStyleConfig.itemContent,
  );

  return (
    <div>
      <RdsTextTooltip text={label} enabled={!expanded} placement="right" disableArrow>
        <div className={navbarControllerClasses} id={id} onClick={action} role="button" tabIndex={0}>
          {expanded ? (
            <RdsIcon name={RdsIconId.KeyboardDoubleArrowLeft} isExplicit />
          ) : (
            <RdsIcon name={RdsIconId.KeyboardDoubleArrowRight} isExplicit />
          )}
          {expanded && <>{label}</>}
        </div>
      </RdsTextTooltip>
    </div>
  );
};
