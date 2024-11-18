/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { MouseEventHandler } from 'react';
import { RdsIcon, RdsIconProps } from '@/components/base/index.ts';
import { useRdsId } from '@/hooks/index.ts';
import { dropdownElementClassBuilder } from '../dropdownClassBuilder.ts';

type RdsDropDownItemProps = {
  id?: string;
  label: string;
  value: string;
  disabled?: boolean;
  active?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  icon?: RdsIconProps['name'];
  extraClasses?: string;
};

const ICON_SIZE = 16;

const RdsDropdownItem = ({
  id: propsId,
  label,
  disabled = false,
  active = false,
  onClick,
  icon,
  extraClasses,
}: RdsDropDownItemProps) => {
  const id = useRdsId('dropdown-item', propsId);

  return (
    <div
      id={id}
      onClick={onClick}
      className={dropdownElementClassBuilder(disabled, active, extraClasses)}
      tabIndex={disabled ? undefined : 0}
      role="option"
    >
      {icon && <RdsIcon name={icon} height={ICON_SIZE} width={ICON_SIZE} />}
      {label}
    </div>
  );
};

export default RdsDropdownItem;
