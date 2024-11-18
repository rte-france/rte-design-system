/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId, RdsIconIdKey } from '@/utils/index.ts';
import { MouseEventHandler } from 'react';
import { chipClassBuilder } from './chipClassBuilder.ts';
import { RdsIcon } from '../rdsIcon/RdsIcon.tsx';
import { useActiveKeyboard, useRdsId } from '@/hooks/index.ts';

export type ChipStatus = 'primary' | 'secondary' | 'success' | 'error';

export type RdsChipProps = {
  id?: string;
  status?: ChipStatus;
  label?: string;
  icon?: RdsIconIdKey;
  onClick?: (e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void;
  onClose?: MouseEventHandler<HTMLButtonElement>;
};

const CHIP_ICON_SIZE = 16;
const CLOSE_ICON_SIZE = 12;

export const RdsChip = ({ id: propsId, label, status = 'primary', icon, onClose, onClick }: RdsChipProps) => {
  const id = useRdsId('chip', propsId);
  const [handlerKeyboardEvent, isActiveKeyboard] = useActiveKeyboard<HTMLSpanElement>((e) => onClick?.(e), { id });
  const { labelClasses, chipClasses, closeButtonClasses } = chipClassBuilder(
    status,
    isActiveKeyboard,
    label,
    icon,
    onClick,
    onClose,
  );

  return (
    <span
      className={chipClasses}
      tabIndex={onClick ? 0 : -1}
      role="listitem"
      onClick={onClick}
      id={id}
      {...handlerKeyboardEvent}
    >
      {icon && <RdsIcon name={icon} width={CHIP_ICON_SIZE} height={CHIP_ICON_SIZE} />}
      {label && <span className={labelClasses}>{label}</span>}
      {onClose && (
        <button
          title="Close"
          className={closeButtonClasses}
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onClose(e);
          }}
        >
          <RdsIcon name={RdsIconId.Close} width={CLOSE_ICON_SIZE} height={CLOSE_ICON_SIZE} />
        </button>
      )}
    </span>
  );
};
