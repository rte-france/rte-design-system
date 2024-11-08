/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Cell, flexRender } from '@tanstack/react-table';

type TableDataCellProps<TData> = {
  cell: Cell<TData, unknown>;
};

export const RdsTableDataCell = <TData,>({ cell }: TableDataCellProps<TData>) => (
  <td className="text-left">
    <div className="flex flex-1 items-center px-1 py-0.5">
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  </td>
);
