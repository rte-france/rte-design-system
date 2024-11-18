/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  getCoreRowModel as getTstCoreRowModel,
  RowModel,
  Table,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import RdsTable, { RdsTableProps } from '../rdsTable/RdsTable.tsx';

export type RdsSimpleTableProps<TData> = {
  getCoreRowModel?: (table: Table<TData>) => () => RowModel<TData>;
} & Omit<RdsTableProps<TData>, 'table'> &
  Omit<TableOptions<TData>, 'getCoreRowModel'>;

export type TableRef<TData> = {
  table: Table<TData>;
};

export const RdsSimpleTable = <TData,>({
  id,
  data,
  columns,
  getCoreRowModel: getCustomCoreRowModel,
  striped,
  trClassName,
  columnSize = 'meta',
  columnResizeMode = undefined,
  ...tableOptions
}: RdsSimpleTableProps<TData>) => {
  const table = useReactTable<TData>({
    columns,
    data,
    getCoreRowModel: getCustomCoreRowModel ?? getTstCoreRowModel<TData>(),
    columnResizeMode,
    ...tableOptions,
  });

  return (
    <RdsTable
      table={table}
      id={id}
      striped={striped}
      columnSize={columnSize}
      columnResizeMode={columnResizeMode}
      trClassName={trClassName}
    />
  );
};

export default RdsSimpleTable;
