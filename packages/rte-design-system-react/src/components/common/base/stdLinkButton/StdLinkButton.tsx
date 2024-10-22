/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { Link } from 'react-router-dom';
import { ButtonColor, ButtonSize, ButtonVariant, IconPosition } from '../stdButton/StdButton';
import { buttonClassBuilder, labelClassBuilder } from '../stdButton/buttonClassBuilder';
import StdIcon from '../stdIcon/StdIcon';

const ICON_SIZE: Record<ButtonSize, number> = {
  extraSmall: 16,
  small: 20,
  medium: 20,
};

type StdLinkButtonProps = {
  href: string;
  location: 'internal' | 'external';
  targetBlank?: boolean;
  label?: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  id?: string;
  icon?: StdIconId;
  position?: IconPosition;
};

export default function StdLinkButton({
  href,
  location,
  targetBlank = false,
  label,
  disabled = false,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  id: propsId,
  icon,
  position = 'left',
}: StdLinkButtonProps) {
  const id = useStdId('linkButton', propsId);
  const linkButtonClasses = buttonClassBuilder(variant, color, size, disabled, !!label);
  const labelClasses = labelClassBuilder(size);

  const linkHref = disabled ? '#' : href;
  const linkTarget = targetBlank && !disabled ? '_blank' : undefined;

  const ButtonContent = () => (
    <>
      {icon && position === 'left' && <StdIcon name={icon} width={ICON_SIZE[size]} height={ICON_SIZE[size]} />}
      {label && <span className={labelClasses}>{label}</span>}
      {icon && position === 'right' && <StdIcon name={icon} width={ICON_SIZE[size]} height={ICON_SIZE[size]} />}
    </>
  );

  if (location === 'internal') {
    return (
      <Link to={linkHref} className={linkButtonClasses} id={id} target={linkTarget} tabIndex={disabled ? -1 : 0}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <a href={linkHref} className={linkButtonClasses} id={id} target={linkTarget} tabIndex={disabled ? -1 : 0}>
      <ButtonContent />
    </a>
  );
}
