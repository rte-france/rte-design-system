/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';

import RdsPagination from '../RdsPagination.tsx';
import { noop, RdsIconId } from '@/utils/index.ts';

const TEST_ID = 'pagination';
const TEST_NEXT_ICON = RdsIconId.KeyboardArrowRight;
const TEST_PREVIOUS_ICON = RdsIconId.KeyboardArrowLeft;

describe('RdsPagination', () => {
  it('renders the default RdsPagination component with the proper id', () => {
    render(<RdsPagination lastPage={10} currentPage={1} id={TEST_ID} onChange={noop} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the default RdsPagination component with the next and previous icons', async () => {
    render(<RdsPagination lastPage={10} currentPage={1} onChange={noop} />);
    await waitFor(() => expect(screen.getByTitle(TEST_NEXT_ICON)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTitle(TEST_PREVIOUS_ICON)).toBeInTheDocument());
  });

  it('renders the RdsPagination with the correct pages numbers', () => {
    render(<RdsPagination lastPage={10} currentPage={1} id={TEST_ID} onChange={noop} />);
    expect(document.querySelector(`#${TEST_ID}`)).toHaveTextContent('1');
    expect(document.querySelector(`#${TEST_ID}`)).not.toHaveTextContent('9');
  });
});
