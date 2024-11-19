/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { MAXIMUM_BADGE_VALUE } from './badgeTools.ts';
import { BadgeSize } from './rdsBadge.tsx';
import { DisplayStatus } from '@/types/components/DisplayStatus.type.ts';

export const COMMON_CLASSES =
  'rds-border rds-border-gray-w rds-flex rds-justify-center rds-items-center rds-rounded-full rds-text-body-xs rds-text-gray-w rds-font-semibold';

export const SIZE_CLASSES = {
  extraSmall: 'rds-h-1 rds-w-1',
  small: 'rds-h-1.5 rds-w-1.5',
  medium: 'rds-h-2 rds-w-2',
};

export const HAS_VALUE_SIZE_CLASSES = {
  smallBadgeSize: 'rds-h-2.5 rds-w-2.5',
  largeBadgeSize: 'rds-h-2.5 rds-w-4',
};

export const COLOR_CLASSES = {
  info: 'rds-bg-primary-600',
  warning: 'rds-bg-gray-600',
  success: 'rds-bg-success-500',
  error: 'rds-bg-error-700',
};

export const badgeClassBuilder = (size: BadgeSize, color: DisplayStatus, badgeValue: number) => {
  if (badgeValue == 0) {
    return clsx(COMMON_CLASSES, SIZE_CLASSES[size], COLOR_CLASSES[color]);
  }

  return badgeValue < MAXIMUM_BADGE_VALUE
    ? clsx(COMMON_CLASSES, HAS_VALUE_SIZE_CLASSES.smallBadgeSize, COLOR_CLASSES[color])
    : clsx(COMMON_CLASSES, HAS_VALUE_SIZE_CLASSES.largeBadgeSize, COLOR_CLASSES[color]);
};
