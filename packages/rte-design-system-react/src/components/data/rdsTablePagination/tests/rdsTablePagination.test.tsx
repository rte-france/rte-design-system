/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { noop, RdsIconId } from '@/utils/index.ts';
import { render, screen, waitFor } from '@testing-library/react';
import { RdsTablePagination } from '../RdsTablePagination.tsx';

const TEST_ID = 'pagination';
const TEST_NEXT_ICON = RdsIconId.KeyboardArrowRight;
const TEST_PREVIOUS_ICON = RdsIconId.KeyboardArrowLeft;

describe('RdsTablePagination', () => {
  it('renders the default RdsTablePagination component with the proper id when specified', () => {
    render(<RdsTablePagination id={TEST_ID} count={1} current={1} intervalSize={1} onChange={noop} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsTablePagination with the right next and previous icons', async () => {
    render(<RdsTablePagination count={1} current={1} intervalSize={1} onChange={noop} />);
    await waitFor(() => expect(screen.getByTitle(TEST_NEXT_ICON)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTitle(TEST_PREVIOUS_ICON)).toBeInTheDocument());
  });
});
