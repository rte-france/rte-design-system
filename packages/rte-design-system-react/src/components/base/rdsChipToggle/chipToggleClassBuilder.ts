/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconIdKey } from '@/utils/index.ts';
import { clsx } from 'clsx';
import { ChipStatus } from '@/components/base/rdsChip/RdsChip.tsx';

export const CHIP_TOOGLE_COMMON_CLASSES =
  'rds-h-3 rds-py-0.5 rds-select-none rds-rounded-full rds-font-semibold rds-inline-flex rds-gap-0.75 rds-items-center rds-align-middle rds-border-2 peer-focus-visible:rds-outline peer-focus-visible:rds-outline-1 peer-focus-visible:rds-outline-offset-1 peer-focus-visible:rds-outline-gray-900 group-hover:rds-cursor-pointer group-hover:rds-shadow-2';

const CHIP_TOOGLE_COMMON_BORDER_CLASSES = 'rds-border rds-border-transparent';

const CHIP_TOOGLE_COMMON_LABEL_CLASSES = 'rds-text-caption rds-font-normal rds-leading-none';

export const CHIP_TOOGLE_STATUS_CLASSES = {
  primary: 'rds-bg-gray-200 rds-text-gray-700',
  secondary: 'rds-bg-primary-100 rds-text-primary-700',
  success: 'rds-bg-success-200 rds-text-success-700',
  error: 'rds-bg-error-100 rds-text-error-700',
};

export const CHIP_TOOGLE_HOVER_STATUS_CLASSES = {
  primary: 'group-hover:rds-bg-gray-300 rds-text-gray-900',
  secondary: 'group-hover:rds-bg-primary-200 rds-text-primary-900',
  success: 'group-hover:rds-bg-success-300 rds-text-success-900',
  error: 'group-hover:rds-bg-error-200 rds-text-error-900',
};

export const CHIP_TOOGLE_ACTIVE_STATUS_CLASSES = {
  primary:
    'group-active:rds-border-primary-600 peer-checked:rds-border-primary-600 group-active:rds-text-gray-900 peer-checked:rds-text-gray-900 ',
  secondary:
    'group-active:rds-border-primary-600 peer-checked:rds-border-primary-600 group-active:rds-text-primary-900 peer-checked:rds-text-primary-900',
  success:
    'group-active:rds-border-success-600 peer-checked:rds-border-success-600 group-active:rds-text-success-900 peer-checked:rds-text-success-900',
  error:
    ' group-active:rds-border-error-600 peer-checked:rds-border-error-600 group-active:rds-text-error-900 peer-checked:rds-text-error-900',
};

export const CHIP_TOOGLE_PADDING_X_CLASSES = {
  paddingLeftWithoutIcon: 'rds-pl-1.5',
  paddingLeftWithIcon: 'rds-pl-0.75',
  paddingRight: 'rds-pr-1.5',
  paddingDefault: 'rds-px-1.5',
};

const paddingChip = (label?: string, icon?: RdsIconIdKey): string => {
  if ((icon && !label) || (!icon && label)) {
    return CHIP_TOOGLE_PADDING_X_CLASSES.paddingDefault;
  }
  const paddingLeft = icon
    ? CHIP_TOOGLE_PADDING_X_CLASSES.paddingLeftWithIcon
    : CHIP_TOOGLE_PADDING_X_CLASSES.paddingLeftWithoutIcon;
  return clsx(paddingLeft, CHIP_TOOGLE_PADDING_X_CLASSES.paddingRight);
};

export const chipToggleClassBuilder = (status: ChipStatus, label?: string, icon?: RdsIconIdKey) => ({
  chipClasses: clsx(
    CHIP_TOOGLE_COMMON_CLASSES,
    CHIP_TOOGLE_COMMON_BORDER_CLASSES,
    CHIP_TOOGLE_STATUS_CLASSES[status],
    CHIP_TOOGLE_HOVER_STATUS_CLASSES[status],
    CHIP_TOOGLE_ACTIVE_STATUS_CLASSES[status],
    CHIP_TOOGLE_COMMON_LABEL_CLASSES,
    paddingChip(label, icon),
  ),
});
