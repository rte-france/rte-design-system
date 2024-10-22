/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdIcon from '@common/base/stdIcon/StdIcon';
import { chipClassBuilder } from './chipToggleClassBuilder';

import { useStdId } from '@/hooks/useStdId';

export type ChipStatus = 'primary' | 'secondary' | 'success' | 'error';

export type StdChipToggleProps = {
  id?: string;
  checked?: boolean;
  value: string;
  status?: ChipStatus;
  label?: string;
  icon?: StdIconId;
  onChange: (isChecked: boolean, value: string) => void;
};

const CHIP_ICON_SIZE = 16;

const StdChipToggle = ({
  id: propsId,
  label,
  onChange,
  checked,
  value,
  status = 'primary',
  icon,
}: StdChipToggleProps) => {
  const id = useStdId('chip-toggle', propsId);
  const { chipClasses } = chipClassBuilder(status, label, icon);

  return (
    <label id={id} className="group" role="listitem">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        className="peer sr-only"
        onChange={() => onChange(!checked, value)}
      />
      <span className={chipClasses}>
        {icon && <StdIcon name={icon} width={CHIP_ICON_SIZE} height={CHIP_ICON_SIZE} />}
        {label}
      </span>
    </label>
  );
};

export default StdChipToggle;
