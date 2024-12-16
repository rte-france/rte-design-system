/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { Table } from '@tanstack/react-table';
import { clsx } from 'clsx';
import { tableClassBuilder } from './tableClassBuilder.ts';
import { RdsTableDataCell } from './composents/cells/RdsTableDataCell.tsx';
import { RdsTableHeader } from './composents/header/RdsTableHeader.tsx';

export type ColumnSizeType = 'pixels' | 'meta';
export type ColumnResizeMode = 'onChange' | 'onEnd';

export type RdsTableProps<TData> = {
  id?: string;
  striped?: boolean;
  trClassName?: string;
  columnSize?: ColumnSizeType;
  columnResizeMode?: ColumnResizeMode;
  table: Table<TData>;
};

const tableStyleBuilder = <TData,>(table: Table<TData>, columnSize: ColumnSizeType) =>
  columnSize === 'pixels'
    ? {
        width: table.getCenterTotalSize(),
      }
    : undefined;

export const RdsTable = <TData,>({
  table,
  id: propId,
  striped,
  trClassName,
  columnSize = 'meta',
}: RdsTableProps<TData>) => {
  const id = useRdsId('table-', propId);
  const trClasses = clsx(trClassName, striped && 'even:rds-bg-primary-200');

  return (
    <table className={tableClassBuilder(table)} id={id} style={tableStyleBuilder(table, columnSize)}>
      <thead>
        <tr>
          {table
            .getHeaderGroups()
            .map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <RdsTableHeader key={header.id} table={table} header={header} columnSize={columnSize} />
              )),
            )}
        </tr>
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className={trClasses}>
            {row.getVisibleCells().map((cell) => (
              <RdsTableDataCell key={cell.id} cell={cell} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RdsTable;
