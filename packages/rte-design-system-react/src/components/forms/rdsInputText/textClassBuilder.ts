/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import type { TextVariant } from './RdsInputText.tsx';

export const TEXT_CLASSES =
  'rds-px-0.5 rds-py-0.25 rds-text-body-s rds-text-gray-700 rds-inline-flex rds-justify-between rds-w-full';
export const TEXT_HELPER_CLASSES = 'rds-h-2 rds-px-1 rds-text-body-s rds-text-gray-700';
export const TEXT_CLEAR_CLASSES =
  'rds-outline-none rds-border rds-border-gray-w focus:rds-rounded focus:rds-border-primary-600';
export const TEXT_INPUT_CLASSES =
  'rds-w-full rds-outline-none rds-bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:rds-appearance-none [&::-webkit-inner-spin-button]:rds-appearance-none';

export const TEXT_COMMON_VARIANT_CLASSES =
  'rds-h-4 rds-pl-2 rds-pr-2 rds-w-full rds-outline-none rds-border rds-inline-flex';

export const TEXT_VARIANT_CLASSES = {
  outlined: 'rds-bg-gray-w hover:rds-bg-gray-50 focus-within:rds-border-primary-600 rds-rounded rds-border-gray-400',
  text: 'rds-bg-gray-w hover:rds-bg-gray-50 focus-within:rds-border-b-primary-600 rds-border-gray-w rds-border-b-gray-400',
};
export const TEXT_VARIANT_DISABLED_CLASSES =
  '[&]:rds-bg-gray-100 hover:rds-bg-gray-100 [&]:rds-text-gray-500 [&]:rds-cursor-not-allowed';

export const TEXT_BUTTON_CLASSES = 'rds-flex rds-w-2.5 [&>button]:rds-p-0';
export const TEXT_HIDE_BUTTON_CLASSES = 'rds-invisible';

export const TEXT_ERROR_CLASSES = {
  text: '[&&]:rds-text-error-600',
  input: {
    outlined: '[&]:rds-border-error-600',
    text: '[&]:rds-border-b-error-600',
  },
};

export const textClassBuilder = (variant: TextVariant, disabled: boolean, error: boolean, hideButton: boolean) => ({
  labelClasses: clsx(TEXT_CLASSES, error && TEXT_ERROR_CLASSES.text),
  wrapperInputClasses: clsx(TEXT_COMMON_VARIANT_CLASSES, TEXT_VARIANT_CLASSES[variant]),
  inputClasses: clsx(
    TEXT_INPUT_CLASSES,
    disabled && TEXT_VARIANT_DISABLED_CLASSES,
    error && TEXT_ERROR_CLASSES.input[variant],
  ),
  helperClasses: clsx(TEXT_HELPER_CLASSES, error && TEXT_ERROR_CLASSES.text),
  clearClasses: clsx(TEXT_CLEAR_CLASSES, disabled && TEXT_VARIANT_DISABLED_CLASSES),
  buttonClasses: clsx(TEXT_BUTTON_CLASSES, hideButton && TEXT_HIDE_BUTTON_CLASSES),
});
