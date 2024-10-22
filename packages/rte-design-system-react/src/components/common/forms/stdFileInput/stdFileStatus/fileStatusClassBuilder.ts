/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { FileInputStatus } from './StdFileStatus';

export const NAME_CLASSES = 'flex-1 overflow-hidden text-ellipsis';

export const STATUS_CLASSES = {
  loading: 'text-gray-700',
  success: 'font-semibold text-gray-700',
  error: 'font-semibold text-error-600',
  empty: '',
};

export const fileStatusClassBuilder = (status: FileInputStatus): { nameClasses: string } => ({
  nameClasses: clsx(NAME_CLASSES, STATUS_CLASSES[status]),
});
