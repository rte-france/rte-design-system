/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId } from '@/shared/index.ts';
import { clsx } from 'clsx';
import { ChipStatus } from '@/components/base/rdsChip/RdsChip.tsx';

export const COMMON_CLASSES =
  'h-3 py-0.5 select-none rounded-full font-semibold inline-flex gap-0.75 items-center align-middle border-2 peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-1 peer-focus-visible:outline-gray-900 group-hover:cursor-pointer group-hover:shadow-2';

const COMMON_BORDER_CLASSES = 'border border-transparent';

const COMMON_LABEL_CLASSES = 'text-caption font-normal leading-none';

export const STATUS_CLASSES = {
  primary: 'bg-gray-200 text-gray-700',
  secondary: 'bg-primary-100 text-primary-700',
  success: 'bg-success-200 text-success-700',
  error: 'bg-error-100 text-error-700',
};

export const HOVER_STATUS_CLASSES = {
  primary: 'group-hover:bg-gray-300 text-gray-900',
  secondary: 'group-hover:bg-primary-200 text-primary-900',
  success: 'group-hover:bg-success-300 text-success-900',
  error: 'group-hover:bg-error-200 text-error-900',
};

export const ACTIVE_STATUS_CLASSES = {
  primary:
    'group-active:border-primary-600 peer-checked:border-primary-600 group-active:text-gray-900 peer-checked:text-gray-900 ',
  secondary:
    'group-active:border-primary-600 peer-checked:border-primary-600 group-active:text-primary-900 peer-checked:text-primary-900',
  success:
    'group-active:border-success-600 peer-checked:border-success-600 group-active:text-success-900 peer-checked:text-success-900',
  error:
    ' group-active:border-error-600 peer-checked:border-error-600 group-active:text-error-900 peer-checked:text-error-900',
};

export const PADDING_X_CLASSES = {
  paddingLeftWithoutIcon: 'pl-1.5',
  paddingLeftWithIcon: 'pl-0.75',
  paddingRight: 'pr-1.5',
  paddingDefault: 'px-1.5',
};

const paddingChip = (label?: string, icon?: keyof typeof RdsIconId): string => {
  if ((icon && !label) || (!icon && label)) {
    return PADDING_X_CLASSES.paddingDefault;
  }
  const paddingLeft = icon ? PADDING_X_CLASSES.paddingLeftWithIcon : PADDING_X_CLASSES.paddingLeftWithoutIcon;
  return clsx(paddingLeft, PADDING_X_CLASSES.paddingRight);
};

export const chipClassBuilder = (status: ChipStatus, label?: string, icon?: keyof typeof RdsIconId) => ({
  chipClasses: clsx(
    COMMON_CLASSES,
    COMMON_BORDER_CLASSES,
    STATUS_CLASSES[status],
    HOVER_STATUS_CLASSES[status],
    ACTIVE_STATUS_CLASSES[status],
    COMMON_LABEL_CLASSES,
    paddingChip(label, icon),
  ),
});
