/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import type { ButtonColor, ButtonSize, ButtonVariant } from './RdsButton.tsx';

export const COMMON_CLASSES =
  'rds-rounded rds-font-semibold rds-text-center rds-inline-flex rds-flex-row rds-items-center';

export const SIZE_CLASSES = {
  extraSmall: 'rds-px-0.25 rds-text-button-xs',
  small: 'rds-px-0.5 rds-py-0.25 rds-text-button-s',
  medium: 'rds-px-1 rds-py-0.75 rds-text-button-s',
};
export const SINGLE_ICON_CLASSES = {
  extraSmall: '[&]:rds-px-0 [&]:rds-py-0',
  small: '[&]:rds-px-0.25',
  medium: '[&]:rds-px-0.75',
};

export const FOCUS_CLASSES = {
  primary: 'focus:rds-outline focus:rds-outline-1 focus:rds-outline-offset-2 focus:rds-outline-primary-900',
  secondary: 'focus:rds-outline focus:rds-outline-1 focus:rds-outline-offset-2 focus:rds-outline-gray-900',
  danger: 'focus:rds-outline focus:rds-outline-1 focus:rds-outline-offset-2 focus:rds-outline-gray-900',
};

export const VARIANT_CLASSES = {
  primary: {
    contained:
      'rds-bg-primary-600 hover:rds-bg-primary-700 active:rds-bg-primary-800 rds-text-gray-w rds-border rds-border-primary-600 rds-border-opacity-0',
    outlined:
      'rds-bg-gray-w hover:rds-bg-primary-50 active:rds-bg-primary-100 rds-text-primary-600 rds-border rds-border-primary-600',
    dashed:
      'rds-bg-transparent hover:rds-bg-primary-50 active:rds-bg-primary-100 text-primary-600 rds-border-dashed rds-border rds-border-primary-600',
    text: 'rds-bg-transparent hover:rds-bg-primary-50 active:rds-bg-primary-100 rds-text-primary-600 rds-border rds-border-primary-600 rds-border-opacity-0',
    transparent:
      'rds-bg-transparent hover:rds-text-primary-700 active:rds-text-primary-900 rds-text-primary-600 rds-border rds-border-transparent',
  },
  secondary: {
    contained:
      'rds-bg-gray-200 hover:rds-bg-gray-300 active:rds-bg-gray-400 rds-border rds-border-gray-200 rds-border-opacity-0',
    outlined:
      'rds-bg-gray-w hover:rds-bg-gray-50 active:rds-bg-gray-100 rds-text-gray-600 rds-border rds-border-gray-600',
    dashed:
      'rds-bg-transparent hover:rds-bg-gray-50 active:rds-bg-gray-100 rds-text-gray-600 rds-border-dashed rds-border rds-border-gray-600',
    text: 'rds-bg-transparent hover:rds-bg-gray-50 active:rds-bg-gray-100 rds-text-gray-600 rds-border rds-border-gray-200 rds-border-opacity-0',
    transparent:
      'rds-bg-transparent hover:rds-text-gray-700 active:rds-text-gray-600 text-gray-900 rds-border rds-border-transparent',
  },
  danger: {
    contained:
      'rds-bg-error-700 hover:rds-bg-error-800 active:rds-bg-error-900 rds-border rds-border-gray-200 rds-border-opacity-0',
    outlined:
      'rds-bg-gray-w hover:rds-bg-error-50 active:rds-bg-error-100 rds-text-error-700 rds-border rds-border-error-700',
    dashed:
      'rds-bg-transparent hover:rds-bg-error-50 active:rds-bg-error-100 rds-text-error-700 rds-border-dashed rds-border rds-border-error-700',
    text: 'rds-bg-transparent hover:rds-bg-error-50 active:rds-bg-error-100 rds-text-error-700 rds-border rds-border-error-700 rds-border-opacity-0',
    transparent:
      'rds-bg-transparent hover:rds-text-gray-700 active:rds-text-gray-600 rds-text-gray-900 rds-border rds-border-transparent',
  },
};

export const VARIANT_CLASSES_DISABLED = {
  contained:
    'rds-bg-gray-200 rds-text-gray-500 rds-border rds-border-gray-500 rds-border-opacity-0 rds-cursor-not-allowed rds-pointer-events-none',
  outlined:
    'rds-bg-gray-200 text-gray-500 rds-border rds-border-gray-500 rds-cursor-not-allowed rds-pointer-events-none',
  dashed:
    'rds-bg-gray-200 text-gray-500 rds-border-dashed rds-border rds-border-gray-500 rds-cursor-not-allowed rds-pointer-events-none',
  text: 'rds-bg-gray-200 text-gray-500 rds-border rds-border-gray-500 rds-border-opacity-0 rds-cursor-not-allowed rds-pointer-events-none',
  transparent: 'text-gray-500 rds-border rds-border-transparent rds-cursor-not-allowed rds-pointer-events-none',
};

export const LABEL_CLASSES_COMMON = 'rds-inline-flex rds-capitalize-first rds-line-clamp-1 rds-text-nowrap';
export const LABEL_CLASSES_PADDING_SIZE = {
  extraSmall: 'rds-px-0.25 rds-py-0.25',
  small: 'rds-px-0.5 rds-py-0.25',
  medium: 'rds-px-1 rds-py-0.25',
};

export const buttonClassBuilder = (
  variant: ButtonVariant,
  color: ButtonColor,
  size: ButtonSize,
  disabled: boolean,
  hasLabel: boolean,
): string => {
  const baseClasses = clsx(COMMON_CLASSES, !hasLabel && SINGLE_ICON_CLASSES[size], SIZE_CLASSES[size]);

  if (disabled) {
    return clsx(baseClasses, VARIANT_CLASSES_DISABLED[variant]);
  }
  return clsx(baseClasses, VARIANT_CLASSES[color][variant], FOCUS_CLASSES[color]);
};

export function labelClassBuilder(size: ButtonSize) {
  return clsx(LABEL_CLASSES_COMMON, LABEL_CLASSES_PADDING_SIZE[size]);
}
