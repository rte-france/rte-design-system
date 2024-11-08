/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { flexRender, Header, Table } from '@tanstack/react-table';
import { ColumnSizeType } from '../../RdsTable.tsx';
import { headerClassBuilder, headerDivClassBuilder } from './headerClassBuilder.ts';

export type RdsTableHeaderProps<TData> = {
  table: Table<TData>;
  header: Header<TData, unknown>;
  columnSize: ColumnSizeType;
};

const headerDivStyleBuilder = <TData,>({ table, header }: RdsTableHeaderProps<TData>) => ({
  transform:
    table.options.columnResizeMode === 'onEnd' && header.column.getIsResizing()
      ? `translateX(${
          (table.options.columnResizeDirection === 'rtl' ? -1 : 1) *
          (table.getState().columnSizingInfo.deltaOffset ?? 0)
        }px)`
      : '',
});

export const RdsTableHeader = <TData,>(props: RdsTableHeaderProps<TData>) => {
  const { table, header, columnSize } = props;
  return (
    <th className={headerClassBuilder(props)} style={columnSize === 'pixels' ? { width: header.getSize() } : undefined}>
      <span>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</span>
      {table.options.columnResizeMode && (
        <div
          onDoubleClick={header.column.resetSize}
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          className={headerDivClassBuilder(props)}
          style={headerDivStyleBuilder(props)}
        />
      )}
    </th>
  );
};
