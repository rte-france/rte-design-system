/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Table } from '@tanstack/react-table';
import clsx from 'clsx';

const ROW_CLASSES = '[&_tr]:rds-border-b [&_tr]:rds-border-gray-400 [&_tr]:rds-text-body-s';

export const tableClassBuilder = <TData>(table: Table<TData>) =>
  clsx(table.options.columnResizeMode ? 'rds-w-fit' : 'rds-w-full', ROW_CLASSES);
