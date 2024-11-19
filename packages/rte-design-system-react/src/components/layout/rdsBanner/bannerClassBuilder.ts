/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { DisplayStatus } from '@/types/components/DisplayStatus.type.ts';
import { clsx } from 'clsx';

export const COMMON_CONTAINER_CLASSES =
  'rds-flex rds-items-center rds-gap-2 rds-border-b-2 rds-px-3 rds-py-1 rds-min-h-6 rds-max-h-9';

export const COMMON_TEXT_CLASSES = 'rds-line-clamp-3 rds-grow rds-text-body-xs';

export const STATUS_CONTAINER_CLASSES = {
  success: 'rds-border-success-600 rds-bg-success-200',
  error: 'rds-border-error-600 rds-bg-error-200',
  warning: 'rds-border-warning-600 rds-bg-warning-200',
  info: 'rds-border-info-600 rds-bg-info-200',
};

export const STATUS_COLOR_CLASSES = {
  success: 'rds-text-success-800',
  error: 'rds-text-error-800',
  warning: 'rds-text-warning-900',
  info: 'rds-text-info-800',
};

export const bannerClassBuilder = (status: DisplayStatus) => ({
  containerClasses: clsx(COMMON_CONTAINER_CLASSES, STATUS_CONTAINER_CLASSES[status]),
  iconClasses: STATUS_COLOR_CLASSES[status],
  textClasses: clsx(COMMON_TEXT_CLASSES, STATUS_COLOR_CLASSES[status]),
});
