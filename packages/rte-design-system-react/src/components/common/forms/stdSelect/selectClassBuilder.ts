/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { StdSelectSize } from './StdSelect';

export const COMMON_SELECT_CLASSES =
  'px-1 w-full border rounded flex gap-1 justify-between items-center border-gray-400 cursor-pointer ';

export const SELECT_SIZE_CLASSES = {
  small: 'py-0.25',
  medium: 'py-0.75',
};
export const SELECT_TEXT_CLASSES = 'text-body-s text-gray-500';
export const LABEL_CLASSES = 'px-0.5 py-0.25 text-overnote text-gray-700';
export const HELPER_CLASSES = 'px-1 py-0.25 text-caption font-semibold text-gray-700';
export const ACTIVE_CLASSES = '[&]:text-gray-700';

export const ERROR_CLASSES = {
  label: '[&&]:text-error-600',
  select: '[&]:border-error-600',
  helper: '[&]:text-error-600',
};

export const STATUS_CLASSES = {
  enabled:
    'hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:border-primary-600 focus-visible:text-gray-700',
  disabled: 'bg-gray-100 [&]:border-gray-300 [&&]:text-gray-500 [&]:cursor-not-allowed',
};

export const TOGGLE_ICON_CLASSES = {
  enabled: 'gray-700',
  disabled: 'gray-500',
} as const;

export const selectClassBuilder = (size: StdSelectSize, disabled: boolean, error: boolean, hasValue: boolean) => {
  const disabledKey = disabled ? 'disabled' : 'enabled';

  const classes = {
    selectClasses: clsx(
      COMMON_SELECT_CLASSES,
      SELECT_SIZE_CLASSES[size],
      SELECT_TEXT_CLASSES,
      STATUS_CLASSES[disabledKey],
    ),
    labelClasses: LABEL_CLASSES,
    helperClasses: HELPER_CLASSES,
    toggleIconClasses: TOGGLE_ICON_CLASSES[disabledKey],
  };

  if (hasValue) {
    classes.selectClasses = clsx(classes.selectClasses, ACTIVE_CLASSES);
  }

  if (error) {
    classes.selectClasses = clsx(classes.selectClasses, ERROR_CLASSES.select);
    classes.labelClasses = clsx(classes.labelClasses, ERROR_CLASSES.label);
    classes.helperClasses = clsx(classes.helperClasses, ERROR_CLASSES.helper);
  }

  return classes;
};
