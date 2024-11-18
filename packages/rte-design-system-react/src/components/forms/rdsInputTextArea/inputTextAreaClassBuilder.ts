/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const WRAPPER_CLASSES = 'rds-flex-col rds-justify-start rds-items-start rds-inline-flex rds-w-full rds-h-full';

export const TEXT_CLASSES =
  'rds-px-0.5 rds-py-0.25 rds-text-body-s rds-text-gray-700 rds-inline-flex rds-justify-between rds-w-full';
export const HELPER_CLASSES =
  'rds-px-1 rds-text-body-s rds-text-gray-700 rds-w-full rds-overflow-hidden rds-whitespace-nowrap rds-text-ellipsis';

export const COMMON_VARIANT_CLASSES =
  'rds-border-gray-400 rds-rounded rds-h-full rds-px-2 rds-py-1 rds-w-full rds-outline-none rds-border rds-inline-flex rds-resize-y rds-self-stretch rds-bg-gray-w hover:rds-bg-gray-50 focus:rds-border-primary-600';

export const VARIANT_DISABLED_CLASSES =
  '[&]:rds-bg-gray-100 [&]:rds-hover [&]:rds-text-gray-500 [&]:rds-cursor-not-allowed';

export const ERROR_CLASSES = {
  text: '[&&]:rds-text-error-600',
  input: '[&]:rds-border-error-600',
};

export const getMaxHeightClass = (maxHeight: number) => `max-h-${maxHeight}`;

export const inputTextAreaClassBuilder = (disabled: boolean, error: boolean, maxHeight?: number) => ({
  wrapperClasses: clsx(WRAPPER_CLASSES),
  labelClasses: clsx(TEXT_CLASSES, error && ERROR_CLASSES.text),
  inputClasses: clsx(
    COMMON_VARIANT_CLASSES,
    disabled && VARIANT_DISABLED_CLASSES,
    error && ERROR_CLASSES.input,
    maxHeight && getMaxHeightClass(maxHeight),
  ),
  helperClasses: clsx(HELPER_CLASSES, error && ERROR_CLASSES.text),
});
