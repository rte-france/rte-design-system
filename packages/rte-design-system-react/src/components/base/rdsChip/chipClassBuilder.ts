/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconIdKey } from '@/utils/index.ts';
import { clsx } from 'clsx';
import { MouseEventHandler } from 'react';
import { ChipStatus } from './RdsChip.tsx';

export const CHIP_COMMON_CLASSES =
  'rds-active rds-h-3 rds-py-0.5 rds-rounded-full rds-font-semibold rds-inline-flex rds-gap-0.75 rds-items-center rds-align-middle rds-border-2 focus-visible:rds-outline focus-visible:rds-outline-1 focus-visible:rds-outline-offset-1 focus-visible:rds-outline-gray-900 hover:rds-shadow-2';

const CHIP_COMMON_BORDER_CLASSES = 'rds-border rds-border-transparent';

const CHIP_COMMON_LABEL_CLASSES = 'rds-text-caption rds-font-normal rds-leading-none';

export const CHIP_ACTIVE_CLASSES = {
  primary:
    'hover:rds-bg-gray-300 hover:rds-cursor-pointer active:rds-border-primary-600 active:rds-bg-gray-200 hover:rds-text-gray-900 active:rds-text-gray-900',
  secondary:
    'hover:rds-bg-primary-200 hover:rds-cursor-pointer active:rds-border-primary-600 active:rds-bg-primary-100 hover:rds-text-primary-900 active:rds-text-primary-900',
  success:
    'hover:rds-bg-success-300 hover:rds-cursor-pointer active:rds-border-success-600 active:rds-bg-success-200 hover:rds-text-success-900 active:rds-text-success-900',
  error:
    'hover:rds-bg-error-200 hover:rds-cursor-pointer active:rds-border-error-600 active:rds-bg-error-100 hover:rds-text-error-900 active:rds-text-error-900',
};

export const CHIP_ACTIVE_KEYBOARD_CLASSES = {
  primary: 'rds-bg-gray-200 border-primary-600',
  secondary: 'rds-bg-primary-100 border-primary-600',
  success: 'rds-bg-success-200 border-success-600',
  error: 'rds-bg-error-100 border-error-600',
};

export const CHIP_STATUS_CLASSES = {
  primary: 'rds-bg-gray-200 rds-text-gray-700',
  secondary: 'rds-bg-primary-100 rds-text-primary-700',
  success: 'rds-bg-success-100 rds-text-success-700',
  error: 'rds-bg-error-100 rds-text-error-700',
};

const CHIP_CLOSE_BUTTON_CLASSES =
  'rds-align-center rds-flex rds-h-1.5 rds-w-1.5 rds-flex-col rds-items-center rds-justify-center rds-text-gray-600 rds-rounded-full hover:rds-bg-gray-400 hover:rds-text-gray-700 active:rds-bg-gray-500 active:rds-text-gray-800';

const CHIP_FOCUS_CLOSE_BUTTON_CLASSES =
  'focus-visible:rds-outline focus-visible:rds-outline-1 focus-visible:rds-outline-offset-0 focus-visible:rds-outline-gray-900 focus-visible:rds-rounded';

export const CHIP_PADDING_X = {
  paddingLeftDefault: 'rds-pl-1.5',
  paddingLeftWithIcon: 'rds-pl-0.75',
  paddingRightDefault: 'rds-pr-1.5',
  paddingRightWithCloseButton: 'rds-pr-0.5',
};

const paddingChip = (label?: string, icon?: RdsIconIdKey, onClose?: MouseEventHandler<HTMLButtonElement>): string => {
  const paddingLeft = icon && !icon === !label ? CHIP_PADDING_X.paddingLeftWithIcon : CHIP_PADDING_X.paddingLeftDefault;
  const paddingRight = onClose ? CHIP_PADDING_X.paddingRightWithCloseButton : CHIP_PADDING_X.paddingRightDefault;
  return clsx(paddingLeft, paddingRight);
};

export const chipClassBuilder = (
  status: ChipStatus,
  isActive: boolean,
  label?: string,
  icon?: RdsIconIdKey,
  onClick?: (e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void,
  onClose?: MouseEventHandler<HTMLButtonElement>,
) => ({
  chipClasses: clsx(
    CHIP_COMMON_CLASSES,
    !isActive && CHIP_COMMON_BORDER_CLASSES,
    !isActive && CHIP_STATUS_CLASSES[status],
    onClick && CHIP_ACTIVE_CLASSES[status],
    isActive && CHIP_ACTIVE_KEYBOARD_CLASSES[status],
    paddingChip(label, icon, onClose),
  ),
  labelClasses: CHIP_COMMON_LABEL_CLASSES,
  closeButtonClasses: clsx(CHIP_CLOSE_BUTTON_CLASSES, CHIP_FOCUS_CLOSE_BUTTON_CLASSES),
});
