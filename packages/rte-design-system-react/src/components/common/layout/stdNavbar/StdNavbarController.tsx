/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdIcon from '../../base/stdIcon/StdIcon';
import StdTextTooltip from '../stdTextTooltip/StdTextTooltip';
import { ItemStyleConfig } from './StdNavbar';
import { navbarControllerClassBuilder } from './navbarClassBuilder';

type StdNavbarControllerProps = {
  id: string;
  label: string;
  action: () => void;
  expanded?: boolean;
  itemsStyleConfig: {
    itemContent?: ItemStyleConfig;
    itemBackground?: ItemStyleConfig;
  };
};

const StdNavbarController = ({ label, id, action, expanded = true, itemsStyleConfig }: StdNavbarControllerProps) => {
  const iconId = expanded ? StdIconId.KeyboardDoubleArrowLeft : StdIconId.KeyboardDoubleArrowRight;
  const navbarControllerClasses = navbarControllerClassBuilder(
    expanded,
    itemsStyleConfig.itemBackground,
    itemsStyleConfig.itemContent,
  );

  return (
    <div>
      <StdTextTooltip text={label} enabled={!expanded} placement="right" disableArrow>
        <div className={navbarControllerClasses} id={id} onClick={action} role="button" tabIndex={0}>
          {expanded ? <StdIcon name={iconId} isExplicit /> : <StdIcon name={iconId} isExplicit={false} alt={label} />}
          {expanded && <>{label}</>}
        </div>
      </StdTextTooltip>
    </div>
  );
};

export default StdNavbarController;
