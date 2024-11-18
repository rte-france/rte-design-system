/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { SearchInputSize, SearchVariant } from './RdsSearchInput.tsx';

export const INPUT_WRAPPER =
  'rds-rounded-0.5 rds-group rds-inline-flex rds-w-full rds-flex-row rds-items-center rds-gap-1 rds-justify-center rds-rounded rds-border';
export const INPUT_CLASSES =
  'rds-w-full rds-h-2.5 rds-bg-transparent rds-outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:rds-appearance-none [&::-webkit-search-cancel-button]:rds-appearance-none [&::-webkit-outer-spin-button]:rds-appearance-none rds-text-gray-900 placeholder:rds-text-gray-500 ';
export const LABEL_CLASSES = 'rds-mb-0.25 rds-h-auto rds-w-auto rds-overflow-ellipsis rds-px-0.5 rds-text-gray-700';
export const VARIANT_CLASSES = {
  filled:
    'hover:placeholder:rds-text-gray-700 rds-border-gray-w rds-border-b-gray-400 rds-bg-gray-100  focus-within:rds-border-b-primary-600 hover:rds-border-b-gray-500 hover:rds-bg-gray-200  focus:rds-bg-gray-100 [&>*]:hover:placeholder:rds-text-gray-700 [&>*]:focus:rds-text-gray-900',
  outlined:
    'hover:placeholder:rds-text-gray-700 rds-rounded rds-border-gray-400 focus-within:rds-border-primary-600 hover:rds-bg-gray-100 focus:rds-border-primary-600',
};
export const DEFAULT_CLEAR_BUTTON_CLASS = 'rds-flex rds-flex-row rds-items-start rds-justify-center';
export const INVISIBLE_CLEAR_BUTTON_CLASSES = 'rds-invisible rds-h-2.5';
export const VARIANT_DISABLED_CLASSES =
  'hover:rds-bg-gray-200 rds-cursor-not-allowed rds-bg-gray-200 rds-text-gray-500';

export const SIZE_CLASSES = {
  small: 'rds-px-1 rds-py-0.25',
  medium: 'rds-px-1.5 rds-py-0.75',
};

export const searchClassBuilder = (variant: SearchVariant, disabled: boolean, size: SearchInputSize) => ({
  inputClasses: clsx(INPUT_CLASSES, disabled && VARIANT_DISABLED_CLASSES),
  inputWrapperClass: clsx(
    INPUT_WRAPPER,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    disabled && VARIANT_DISABLED_CLASSES,
  ),
  labelClass: clsx(LABEL_CLASSES),
});

export const clearClassBuilder = (shouldHideClearButton: boolean) =>
  shouldHideClearButton ? INVISIBLE_CLEAR_BUTTON_CLASSES : DEFAULT_CLEAR_BUTTON_CLASS;
