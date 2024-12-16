/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { createColumnHelper } from '@tanstack/react-table';
import { RdsRadioButton, RdsSimpleTable, RdsTablePagination } from 'rte-design-system-react';

const columnHelper = createColumnHelper<{ name: string; last: string }>();
export const Data = () => {
  const headers = [
    columnHelper.display({
      id: 'radioColumn',
      header: ({ table }) => (
        <RdsRadioButton
          value="headerRadio"
          label="Select All"
          checked={table.getIsAllRowsSelected()}
          onChange={() => table.toggleAllRowsSelected()}
          name="headerRadio"
        />
      ),
      cell: ({ row }) => (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${row.getIsSelected() ? 'rds-block' : 'rds-hidden group-hover:rds-block'}`}
        >
          <RdsRadioButton
            value={row.original.name.toString()}
            label=""
            disabled={!row.getCanSelect()}
            checked={row.getIsSelected()}
            name={`radio-${row.original.name}`}
          />
        </div>
      ),
    }),
    columnHelper.accessor('name', {
      header: 'Name',
      cell: ({ getValue }) => {
        return <span className={`rds-transition-colors`}>{getValue()}</span>;
      },
    }),
    columnHelper.accessor('last', {
      header: 'Last',
      cell: ({ getValue }) => {
        return <span className={`rds-transition-colors`}>{getValue()}</span>;
      },
    }),
  ];

  return (
    <>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <span>RdsTable</span>
        <RdsSimpleTable
          columns={headers}
          data={[
            {
              name: 'John',
              last: 'Doe',
            },
            {
              name: 'Jane',
              last: 'Doe',
            },
          ]}
        />
      </div>
      <div style={{ display: 'flex', gap: '2rem', width: '15rem' }}>
        <span>RdsPagination</span>
        <RdsTablePagination count={2} intervalSize={5} current={0} onChange={() => {}} />
      </div>
    </>
  );
};

export default Data;
