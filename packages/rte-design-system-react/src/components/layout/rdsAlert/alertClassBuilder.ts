/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { DisplayStatus } from '@/types/components/DisplayStatus.type.ts';
import { clsx } from 'clsx';
export const ALERT_COMMON_CONTAINER_CLASSES =
  'rds-flex rds-items-center rds-gap-2 rds-rounded rds-border-b-2 rds-px-2 rds-py-1 rds-shadow-4';

export const ALERT_COMMON_TEXT_CLASSES = 'rds-line-clamp-2 rds-grow rds-text-body-xs rds-font-semibold';

export const ALERT_STATUS_CONTAINER_CLASSES = {
  success: 'rds-border-success-600 rds-bg-success-200',
  error: 'rds-border-error-600 rds-bg-error-200',
  warning: 'rds-border-warning-600 rds-bg-warning-200',
  info: 'rds-border-info-600 rds-bg-info-200',
};

export const ALERT_STATUS_COLOR_CLASSES = {
  success: 'rds-text-success-800',
  error: 'rds-text-error-800',
  warning: 'rds-text-warning-900',
  info: 'rds-text-info-800',
};

const ALERT_COMMON_ICON_CLASSES = 'rds-my-0.75';

export const alertClassBuilder = (status: DisplayStatus) => ({
  containerClasses: clsx(ALERT_COMMON_CONTAINER_CLASSES, ALERT_STATUS_CONTAINER_CLASSES[status]),
  textClasses: clsx(ALERT_COMMON_TEXT_CLASSES, ALERT_STATUS_COLOR_CLASSES[status]),
  iconClasses: clsx(ALERT_COMMON_ICON_CLASSES, ALERT_STATUS_COLOR_CLASSES[status]),
});
