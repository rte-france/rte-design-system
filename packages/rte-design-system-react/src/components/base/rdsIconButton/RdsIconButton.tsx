/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId, RotationOptionsType, TailwindColorClass, useRdsId } from '@/shared/index.ts';
import { iconButtonClassBuilder } from './iconButtonClassBuilder.ts';
import { RdsIcon } from '../rdsIcon/RdsIcon.tsx';

export type IconButtonVariant = 'default' | 'danger' | 'white'; // White is temporary. Will be removed once the good one is designed
export type IconButtonSize = 'extraSmall' | 'small' | 'medium';

export interface RdsIconButtonProps {
  icon: keyof typeof RdsIconId;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  disabled?: boolean;
  id?: string;
  color?: TailwindColorClass;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  rotationOptions?: RotationOptionsType;
  rotate?: boolean;
  appearEffect?: boolean;
}

const ICON_SIZE: Record<IconButtonSize, number> = {
  extraSmall: 12,
  small: 16,
  medium: 20,
};

export const RdsIconButton = ({
  icon,
  size = 'medium',
  variant = 'default',
  disabled = false,
  id: propsId,
  color,
  onClick,
  rotationOptions,
  rotate,
  appearEffect = false,
}: RdsIconButtonProps) => {
  const iconButtonClasses = iconButtonClassBuilder(variant, disabled, appearEffect);
  const id = useRdsId('icon-btn', propsId);

  return (
    <button className={iconButtonClasses} disabled={disabled} onClick={onClick} id={id} aria-label={icon}>
      <RdsIcon
        name={icon}
        width={ICON_SIZE[size]}
        height={ICON_SIZE[size]}
        color={color}
        rotationOptions={rotationOptions}
        rotate={rotate}
      />
    </button>
  );
};
