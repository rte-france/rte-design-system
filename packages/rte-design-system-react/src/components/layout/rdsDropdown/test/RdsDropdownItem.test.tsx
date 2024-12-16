/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { noop, RdsIconId } from '@/utils/index.ts';
import { render, screen, waitFor } from '@testing-library/react';
import RdsDropdownItem from '../subComponents/RdsDropdownItem.tsx';

const TEST_LABEL = 'Label';
const TEST_VALUE = 'value';
const TEST_ICON = RdsIconId.Add;
const TEST_ID = 'my-dropdown-item';

describe('RdsDropdownItem', () => {
  it('renders the default RdsDropdownItem component', () => {
    render(<RdsDropdownItem label={TEST_LABEL} value={TEST_VALUE} onClick={noop} />);
    const item = screen.getByRole('option');
    expect(item).toBeInTheDocument();
    expect(item.textContent).toBe(TEST_LABEL);
  });

  it('renders the RdsDropdownItem with the proper id when specified', () => {
    render(<RdsDropdownItem label={TEST_LABEL} value={TEST_VALUE} id={TEST_ID} onClick={noop} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsDropdownItem component with icon + label', async () => {
    render(<RdsDropdownItem label={TEST_LABEL} value={TEST_VALUE} icon={TEST_ICON} onClick={noop} />);
    const item = screen.getByRole('option');
    expect(item).toBeInTheDocument();
    expect(item.textContent).toContain(TEST_LABEL);
    await waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });
});
