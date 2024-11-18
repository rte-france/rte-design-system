/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import clsx from 'clsx';
import { RdsTableHeaderProps } from './RdsTableHeader.tsx';

const COMMON_HEADER_CLASSES = 'rds-px-1 rds-py-0.5 rds-text-left rds-font-semibold';
export const headerClassBuilder = <TData>({ table, header, columnSize }: RdsTableHeaderProps<TData>) =>
  clsx(
    COMMON_HEADER_CLASSES,
    columnSize === 'meta' ? (header.column.columnDef.meta?.sizeClassNames ?? '') : '',
    table.options.columnResizeMode ? 'rds-group rds-relative' : '',
  );

const RESIZER_CLASSES =
  'rds-absolute rds-top-0 rds-h-full rds-w-0.5 rds-cursor-col-resize rds-touch-none rds-select-none rds-bg-gray-900 rds-bg-opacity-50 rds-opacity-0 group-hover:rds-opacity-100';

export const headerDivClassBuilder = <TData>({ table, header }: RdsTableHeaderProps<TData>) =>
  clsx(
    RESIZER_CLASSES,
    table.options.columnResizeDirection === 'ltr' ? 'rds-right-0' : 'rds-left-0',
    header.column.getIsResizing() ? 'rds-bg-gray-500 rds-opacity-100' : '',
  );
