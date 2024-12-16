/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { RdsModalTitleStatus } from './RdsModalTitle.tsx';

export const MODAL_COMMON_CONTAINER_CLASSES =
  'rds-flex rds-min-w-full rds-max-w-fit rds-items-center rds-gap-1 rds-border-b rds-p-2 rds-h-8';

export const MODAL_CHILDREN_CLASSES = 'rds-text-heading-s rds-line-clamp-2 rds-grow rds-font-semibold rds-text-left';

export const MODAL_CONTAINER_STATUS_CLASSES = {
  default: 'rds-border-b-gray-300 rds-bg-gray-100',
  danger: 'rds-border-b-error-600 rds-bg-error-100',
};

export const MODAL_ICON_STATUS_COLOR_CLASSES = {
  default: 'gray-900',
  danger: 'error-600',
} as const;

export default function modalTitleClassBuilder(status: RdsModalTitleStatus) {
  return {
    containerClasses: clsx(MODAL_COMMON_CONTAINER_CLASSES, MODAL_CONTAINER_STATUS_CLASSES[status]),
    iconColor: MODAL_ICON_STATUS_COLOR_CLASSES[status],
    childrenClasses: MODAL_CHILDREN_CLASSES,
  };
}
