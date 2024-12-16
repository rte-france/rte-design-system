/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { IconButtonVariant } from './RdsIconButton.tsx';

export const COMMON_CLASSES = 'rds-flex rds-items-center rds-bg-transparent rds-rounded-sm';

export const FOCUS_CLASSES = 'focus-visible:rds-outline focus-visible:rds-outline-1 focus-visible:rds-outline-gray-900';

export const VARIANT_CLASSES = {
  default: 'rds-text-gray-700 hover:rds-text-gray-800',
  danger: 'rds-text-gray-700 hover:rds-bg-error-600 hover:rds-text-gray-w',
  white: 'rds-text-gray-w hover:rds-text-gray-100', // Temporary variant. Will be removed once the good one is designed
};

export const APPEAR_EFFECT_CLASSES =
  'rds-duration-50 rds-opacity-0 rds-transition-opacity group-hover:rds-opacity-100 focus-visible:rds-opacity-100';

export const VARIANT_CLASSES_DISABLED = 'rds-text-gray-500 rds-cursor-not-allowed rds-pointer-events-none';

export const iconButtonClassBuilder = (variant: IconButtonVariant, disabled: boolean, appearEffect: boolean): string =>
  disabled
    ? clsx(COMMON_CLASSES, VARIANT_CLASSES_DISABLED)
    : clsx(COMMON_CLASSES, VARIANT_CLASSES[variant], FOCUS_CLASSES, appearEffect ? APPEAR_EFFECT_CLASSES : '');
