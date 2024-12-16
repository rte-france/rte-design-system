/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const COMMON_CHECKBOX_CLASSES =
  'rds-box-content rds-h-1.5 rds-w-1.5 rds-flex rds-justify-center rds-items-center rds-rounded-sm rds-border peer-[:not(:indeterminate):checked]:[&_.done-icon]:rds-block peer-indeterminate:[&_.indeterminate-icon]:rds-block peer-focus-visible:rds-outline rds-outline-offset-1 rds-outline-1';

export const CHECKED_CLASSES =
  'peer-checked:rds-bg-primary-600 peer-checked:rds-border-primary-600 group-hover:peer-checked:rds-bg-primary-700 group-hover:peer-checked:rds-border-primary-700 group-active:peer-checked:rds-bg-primary-900 group-active:peer-checked:rds-border-primary-900 peer-focus-visible:peer-checked:rds-outline-primary-900';
export const CHECKBOX_INDETERMINATE_CLASSES =
  'peer-indeterminate:rds-bg-primary-600 peer-indeterminate:rds-border-primary-600 group-hover:peer-indeterminate:rds-bg-primary-700 group-hover:peer-indeterminate:rds-border-primary-700 group-active:peer-indeterminate:rds-bg-primary-900 group-active:peer-indeterminate:rds-border-primary-900 focus-visible:peer-indeterminate:rds-outline-primary-900';

export const CHECKBOX_DISABLED_CLASSES =
  'peer-checked:rds-bg-gray-500 peer-checked:rds-border-gray-500 peer-indeterminate:rds-bg-gray-500 peer-indeterminate:rds-border-gray-500';

export const OTHER_CHECKBOX_CLASSES = {
  enabled: clsx(
    'group-hover:rds-shadow-1 group-active:rds-shadow-2 rds-border-gray-600 group-hover:rds-bg-gray-200 group-active:rds-bg-gray-300',
    CHECKED_CLASSES,
    CHECKBOX_INDETERMINATE_CLASSES,
  ),
  disabled: clsx(
    'rds-border-gray-500 rds-bg-gray-200 rds-text-gray-500 rds-cursor-not-allowed',
    CHECKBOX_DISABLED_CLASSES,
  ),
};
export const CHECKBOX_ERROR_CLASSES =
  '[&]:rds-border-error-600 peer-checked:[&]:rds-border-error-600 rds-outline-1 rds-outline-offset-0 rds-outline-error-600';
export const CHECKBOX_COMMON_LABEL_CLASSES = 'rds-text-body-s rds-select-none';
export const CHECKBOX_LABEL_TEXT_CLASSES = {
  enabled: 'rds-text-gray-700 peer-checked:rds-text-gray-900 peer-indeterminate:rds-text-gray-900',
  disabled: 'rds-text-gray-500',
};

export const CHECKBOX_ERROR_LABEL_TEXT_CLASS = 'rds-text-error-600';

export const checkboxClassBuilder = (disabled: boolean, error: boolean) => {
  const disabledKey = disabled ? 'disabled' : 'enabled';

  return {
    containerClasses: clsx('rds-flex rds-items-center rds-gap-1 rds-group', { 'cursor-pointer': !disabled }),
    inputClasses: clsx(
      COMMON_CHECKBOX_CLASSES,
      OTHER_CHECKBOX_CLASSES[disabledKey],
      !disabled && error && CHECKBOX_ERROR_CLASSES,
    ),
    labelClasses: clsx(CHECKBOX_COMMON_LABEL_CLASSES, CHECKBOX_LABEL_TEXT_CLASSES[disabledKey], {
      [CHECKBOX_ERROR_LABEL_TEXT_CLASS]: error && !disabled,
    }),
  };
};
