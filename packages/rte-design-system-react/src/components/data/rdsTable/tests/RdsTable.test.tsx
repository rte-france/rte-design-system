/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { act, render, screen } from '@testing-library/react';
import { RdsTable } from '../RdsTable.tsx';
import { getTable } from './testTableUtils.ts';

const TEST_ID = 'test-id';

describe('RdsTable', () => {
  it('renders the default RdsTable component with the proper id when specified', () => {
    const table = getTable();
    render(<RdsTable id={TEST_ID} table={table} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
  it('renders the Table with all its rows', () => {
    const table = getTable();
    const { rerender } = render(<RdsTable table={table} />);

    const rows = document.querySelectorAll('tbody > tr');
    expect(rows).toHaveLength(2);

    act(() => table.toggleAllRowsExpanded(true));
    rerender(<RdsTable table={table} />);
    const rowsExpanded = document.querySelectorAll('tbody > tr');
    expect(rowsExpanded).toHaveLength(3);
  });
});
