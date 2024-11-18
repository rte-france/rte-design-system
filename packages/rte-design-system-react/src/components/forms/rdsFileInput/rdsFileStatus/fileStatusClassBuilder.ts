/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { FileInputStatus } from './RdsFileStatus.tsx';

export const NAME_CLASSES = 'rds-flex-1 rds-overflow-hidden rds-text-ellipsis';

export const STATUS_CLASSES = {
  loading: 'rds-text-gray-700',
  success: 'rds-font-semibold rds-text-gray-700',
  error: 'rds-font-semibold rds-text-error-600',
  empty: '',
};

export const fileStatusClassBuilder = (status: FileInputStatus): { nameClasses: string } => ({
  nameClasses: clsx(NAME_CLASSES, STATUS_CLASSES[status]),
});
