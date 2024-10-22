/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdIcon from '@common/base/stdIcon/StdIcon';
import { Ref, forwardRef } from 'react';
import { buttonClassBuilder, labelClassBuilder } from './buttonClassBuilder';

export type ButtonVariant = 'contained' | 'outlined' | 'dashed' | 'text' | 'transparent';
export type ButtonSize = 'extraSmall' | 'small' | 'medium';
export type ButtonColor = 'primary' | 'secondary' | 'danger';
export type IconPosition = 'left' | 'right';

export type StdButtonProps = {
  label?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onKeydown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  id?: string;
  icon?: StdIconId;
  position?: IconPosition;
};

const ICON_SIZE: Record<ButtonSize, number> = {
  extraSmall: 16,
  small: 20,
  medium: 20,
};

// eslint-disable-next-line react/display-name
const StdButton = forwardRef(
  (
    {
      label,
      disabled = false,
      variant = 'contained',
      color = 'primary',
      size = 'medium',
      onClick = () => {},
      onKeydown = () => {},
      id: propsId,
      icon,
      position = 'left',
    }: StdButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const buttonClasses = buttonClassBuilder(variant, color, size, disabled, !!label);
    const labelClasses = label && labelClassBuilder(size);

    const id = useStdId('btn', propsId);

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={buttonClasses}
        onClick={onClick}
        onKeyDown={onKeydown}
        onMouseDown={(e) => e.preventDefault()}
        id={id}
      >
        {icon && position === 'left' && <StdIcon name={icon} width={ICON_SIZE[size]} height={ICON_SIZE[size]} />}
        {label && <span className={labelClasses}>{label}</span>}
        {icon && position === 'right' && <StdIcon name={icon} width={ICON_SIZE[size]} height={ICON_SIZE[size]} />}
      </button>
    );
  },
);

export default StdButton;
