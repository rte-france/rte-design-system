/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsButton, RdsButtonProps } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';

type RdsButtonCollapseIconProps = {
  onClick: RdsButtonProps['onClick'];
  isOpen: boolean;
};

export const RdsButtonCollapseIcon = ({ onClick, isOpen }: RdsButtonCollapseIconProps) => (
  <RdsButton
    onClick={onClick}
    icon={isOpen ? RdsIconId.KeyboardArrowDown : RdsIconId.KeyboardArrowRight}
    size="extraSmall"
    variant="text"
  />
);
