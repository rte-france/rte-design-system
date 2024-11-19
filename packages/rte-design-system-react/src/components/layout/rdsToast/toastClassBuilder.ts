/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { DisplayStatus } from '@/types/components/DisplayStatus.type.ts';
import { clsx } from 'clsx';

export const COMMON_CONTAINER_CLASSES = 'rds-flex rds-items-center rds-rounded rds-px-2 rds-py-1 rds-shadow-4';
const PROGRESS_BAR_CLASSES = 'rds-border-b-4';
export const COMMON_TEXT_CLASSES = 'rds-grow rds-text-body-xs rds-line-clamp-2 rds-pr-2 rds-font-semibold';

export const STATUS_CONTAINER_CLASSES = {
  success: 'rds-bg-success-200',
  error: 'rds-bg-error-200',
  warning: 'rds-bg-warning-200',
  info: 'rds-bg-info-200',
};

export const STATUS_TEXT_CLASSES = {
  success: 'rds-text-success-800',
  error: 'rds-text-error-800',
  warning: 'rds-text-warning-900',
  info: 'rds-text-info-800',
};

export const toastClassBuilder = (status: DisplayStatus, progressBarPlaceholder: boolean) => ({
  iconClasses: STATUS_TEXT_CLASSES[status],
  containerClasses: progressBarPlaceholder
    ? clsx(COMMON_CONTAINER_CLASSES, STATUS_CONTAINER_CLASSES[status], PROGRESS_BAR_CLASSES)
    : clsx(COMMON_CONTAINER_CLASSES, STATUS_CONTAINER_CLASSES[status]),
  textClasses: clsx(COMMON_TEXT_CLASSES, STATUS_TEXT_CLASSES[status]),
});
