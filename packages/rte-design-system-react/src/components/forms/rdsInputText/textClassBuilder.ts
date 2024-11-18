/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import type { TextVariant } from './RdsInputText.tsx';

export const TEXT_CLASSES =
  'rds-px-0.5 rds-py-0.25 rds-text-body-s rds-text-gray-700 rds-inline-flex rds-justify-between rds-w-full';
export const HELPER_CLASSES = 'rds-h-2 rds-px-1 rds-text-body-s rds-text-gray-700';
export const CLEAR_CLASSES =
  'rds-outline-none rds-border rds-border-gray-w focus:rds-rounded focus:rds-border-primary-600';
export const INPUT_CLASSES =
  'rds-w-full rds-outline-none rds-bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:rds-appearance-none [&::-webkit-inner-spin-button]:rds-appearance-none';

export const COMMON_VARIANT_CLASSES =
  'rds-h-4 rds-pl-2 rds-pr-2 rds-w-full rds-outline-none rds-border rds-inline-flex';

export const VARIANT_CLASSES = {
  outlined: 'rds-bg-gray-w hover:rds-bg-gray-50 focus-within:rds-border-primary-600 rds-rounded rds-border-gray-400',
  text: 'rds-bg-gray-w hover:rds-bg-gray-50 focus-within:rds-border-b-primary-600 rds-border-gray-w rds-border-b-gray-400',
};
export const VARIANT_DISABLED_CLASSES =
  '[&]:rds-bg-gray-100 hover:rds-bg-gray-100 [&]:rds-text-gray-500 [&]:rds-cursor-not-allowed';

export const BUTTON_CLASSES = 'rds-flex rds-w-2.5 [&>button]:rds-p-0';
export const HIDE_BUTTON_CLASSES = 'rds-invisible';

export const ERROR_CLASSES = {
  text: '[&&]:rds-text-error-600',
  input: {
    outlined: '[&]:rds-border-error-600',
    text: '[&]:rds-border-b-error-600',
  },
};

export const textClassBuilder = (variant: TextVariant, disabled: boolean, error: boolean, hideButton: boolean) => ({
  labelClasses: clsx(TEXT_CLASSES, error && ERROR_CLASSES.text),
  wrapperInputClasses: clsx(COMMON_VARIANT_CLASSES, VARIANT_CLASSES[variant]),
  inputClasses: clsx(INPUT_CLASSES, disabled && VARIANT_DISABLED_CLASSES, error && ERROR_CLASSES.input[variant]),
  helperClasses: clsx(HELPER_CLASSES, error && ERROR_CLASSES.text),
  clearClasses: clsx(CLEAR_CLASSES, disabled && VARIANT_DISABLED_CLASSES),
  buttonClasses: clsx(BUTTON_CLASSES, hideButton && HIDE_BUTTON_CLASSES),
});
