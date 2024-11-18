/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconIdKey } from '@/utils/index.ts';
import { chipToggleClassBuilder } from './chipToggleClassBuilder.ts';
import { RdsIcon } from '@/components/base/rdsIcon/RdsIcon.tsx';
import { ChipStatus } from '@/components/base/rdsChip/RdsChip.tsx';
import { useRdsId } from '@/hooks/index.ts';

export type RdsChipToggleProps = {
  id?: string;
  checked?: boolean;
  value: string;
  status?: ChipStatus;
  label?: string;
  icon?: RdsIconIdKey;
  onChange: (isChecked: boolean, value: string) => void;
};

const CHIP_ICON_SIZE = 16;

export const RdsChipToggle = ({
  id: propsId,
  label,
  onChange,
  checked,
  value,
  status = 'primary',
  icon,
}: RdsChipToggleProps) => {
  const id = useRdsId('chip-toggle', propsId);
  const { chipClasses } = chipToggleClassBuilder(status, label, icon);

  return (
    <label id={id} className="rds-group" role="listitem">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        className="rds-peer rds-sr-only"
        onChange={() => onChange(!checked, value)}
      />
      <span className={chipClasses}>
        {icon && <RdsIcon name={icon} width={CHIP_ICON_SIZE} height={CHIP_ICON_SIZE} />}
        {label}
      </span>
    </label>
  );
};
