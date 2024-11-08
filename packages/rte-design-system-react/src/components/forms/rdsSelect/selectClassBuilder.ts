/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { RdsSelectSize } from './RdsSelect.tsx';

export const COMMON_SELECT_CLASSES =
  'rds-px-1 rds-w-full rds-border rds-rounded rds-flex rds-gap-1 rds-justify-between rds-items-center rds-border-gray-400 rds-cursor-pointer';

export const SELECT_SIZE_CLASSES = {
  small: 'rds-py-0.25',
  medium: 'rds-py-0.75',
};
export const SELECT_TEXT_CLASSES = 'rds-text-body-s rds-text-gray-500';
export const LABEL_CLASSES = 'rds-px-0.5 rds-py-0.25 rds-text-overnote rds-text-gray-700';
export const HELPER_CLASSES = 'rds-px-1 rds-py-0.25 rds-text-caption rds-font-semibold rds-text-gray-700';
export const ACTIVE_CLASSES = '[&]:rds-text-gray-700';

export const ERROR_CLASSES = {
  label: '[&&]:rds-text-error-600',
  select: '[&]:rds-border-error-600',
  helper: '[&]:rds-text-error-600',
};

export const STATUS_CLASSES = {
  enabled:
    'hover:rds-bg-gray-100 hover:rds-text-gray-700 focus-visible:rds-outline-none focus-visible:rds-border-primary-600 focus-visible:rds-text-gray-700',
  disabled: 'rds-bg-gray-100 [&]:rds-border-gray-300 [&&]:rds-text-gray-500 [&]:rds-cursor-not-allowed',
};

export const TOGGLE_ICON_CLASSES = {
  enabled: 'gray-700',
  disabled: 'gray-500',
} as const;

export const selectClassBuilder = (size: RdsSelectSize, disabled: boolean, error: boolean, hasValue: boolean) => {
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
