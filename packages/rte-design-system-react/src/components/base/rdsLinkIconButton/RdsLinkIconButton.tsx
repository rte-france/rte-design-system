/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Link } from 'react-router-dom';
import { RdsIconId, TailwindColorClass, useRdsId } from '@/shared/index.ts';
import { IconButtonSize, IconButtonVariant } from '../rdsIconButton/RdsIconButton.tsx';
import { iconButtonClassBuilder } from '../rdsIconButton/iconButtonClassBuilder.ts';

import { RdsIcon } from '../rdsIcon/RdsIcon.tsx';

const ICON_SIZE: Record<IconButtonSize, number> = {
  extraSmall: 12,
  small: 16,
  medium: 20,
};

export type RdsLinkIconButtonProps = {
  href: string;
  location: 'internal' | 'external';
  targetBlank?: boolean;
  icon: keyof typeof RdsIconId;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  disabled?: boolean;
  id?: string;
  color?: TailwindColorClass;
  appearEffect?: boolean;
};

export function RdsLinkIconButton({
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
}: RdsLinkIconButtonProps) {
  const id = useRdsId('linkButton', propsId);
  const linkIconButtonClasses = iconButtonClassBuilder(variant, disabled, appearEffect);

  const linkHref = disabled ? '#' : href;
  const linkTarget = targetBlank && !disabled ? '_blank' : undefined;

  if (location === 'internal') {
    return (
      <Link to={linkHref} className={linkIconButtonClasses} id={id} target={linkTarget} tabIndex={disabled ? -1 : 0}>
        <RdsIcon name={icon} width={ICON_SIZE[size]} height={ICON_SIZE[size]} color={color} />
      </Link>
    );
  }

  return (
    <a href={linkHref} className={linkIconButtonClasses} id={id} target={linkTarget} tabIndex={disabled ? -1 : 0}>
      <RdsIcon name={icon} width={ICON_SIZE[size]} height={ICON_SIZE[size]} color={color} />
    </a>
  );
}
