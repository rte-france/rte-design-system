/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { DisplayStatus } from '@/shared/types';
import { clsx } from 'clsx';
import { MAXIMUM_BADGE_VALUE } from './badgeTools';
import { BadgeSize } from './stdBadge';

export const COMMON_CLASSES =
  'border border-gray-w flex justify-center items-center rounded-full text-body-xs text-gray-w font-semibold';

export const SIZE_CLASSES = {
  extraSmall: 'h-1 w-1',
  small: 'h-1.5 w-1.5',
  medium: 'h-2 w-2',
};

export const HAS_VALUE_SIZE_CLASSES = {
  smallBadgeSize: 'h-2.5 w-2.5',
  largeBadgeSize: 'h-2.5 w-4',
};

export const COLOR_CLASSES = {
  info: 'bg-primary-600',
  warning: 'bg-gray-600',
  success: 'bg-success-500',
  error: 'bg-error-700',
};

export const badgeClassBuilder = (size: BadgeSize, color: DisplayStatus, badgeValue: number) => {
  if (badgeValue == 0) {
    return clsx(COMMON_CLASSES, SIZE_CLASSES[size], COLOR_CLASSES[color]);
  }

  return badgeValue < MAXIMUM_BADGE_VALUE
    ? clsx(COMMON_CLASSES, HAS_VALUE_SIZE_CLASSES.smallBadgeSize, COLOR_CLASSES[color])
    : clsx(COMMON_CLASSES, HAS_VALUE_SIZE_CLASSES.largeBadgeSize, COLOR_CLASSES[color]);
};
