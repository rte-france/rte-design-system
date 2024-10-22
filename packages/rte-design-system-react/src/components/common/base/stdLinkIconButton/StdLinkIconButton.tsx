/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { TailwindColorClass } from '@/shared/types/TailwindColorClass.type';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { Link } from 'react-router-dom';
import StdIcon from '../stdIcon/StdIcon';
import { IconButtonSize, IconButtonVariant } from '../stdIconButton/StdIconButton';
import { iconButtonClassBuilder } from '../stdIconButton/iconButtonClassBuilder';

const ICON_SIZE: Record<IconButtonSize, number> = {
  extraSmall: 12,
  small: 16,
  medium: 20,
};

export type StdLinkIconButtonProps = {
  href: string;
  location: 'internal' | 'external';
  targetBlank?: boolean;
  icon: StdIconId;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  disabled?: boolean;
  id?: string;
  color?: TailwindColorClass;
  appearEffect?: boolean;
};

export default function StdLinkIconButton({
  href,
  location,
  targetBlank = false,
  icon,
  size = 'medium',
  variant = 'default',
  disabled = false,
  id: propsId,
  color,
  appearEffect = false,
}: StdLinkIconButtonProps) {
  const id = useStdId('linkButton', propsId);
  const linkIconButtonClasses = iconButtonClassBuilder(variant, disabled, appearEffect);

  const linkHref = disabled ? '#' : href;
  const linkTarget = targetBlank && !disabled ? '_blank' : undefined;

  if (location === 'internal') {
    return (
      <Link to={linkHref} className={linkIconButtonClasses} id={id} target={linkTarget} tabIndex={disabled ? -1 : 0}>
        <StdIcon name={icon} width={ICON_SIZE[size]} height={ICON_SIZE[size]} color={color} />
      </Link>
    );
  }

  return (
    <a href={linkHref} className={linkIconButtonClasses} id={id} target={linkTarget} tabIndex={disabled ? -1 : 0}>
      <StdIcon name={icon} width={ICON_SIZE[size]} height={ICON_SIZE[size]} color={color} />
    </a>
  );
}
