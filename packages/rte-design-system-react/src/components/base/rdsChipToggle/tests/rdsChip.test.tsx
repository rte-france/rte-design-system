/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { RdsChipToggle } from '@/components/base/rdsChipToggle/RdsChipToggle.tsx';
import { RdsIconId, noop } from '@/utils/index.ts';

const TEST_LABEL = 'Label';
const TEST_VALUE = 'value';
const TEST_ICON = RdsIconId.Add;
const TEST_ID = 'my-chip';

describe('RdsChipToggle', () => {
  it('renders the default RdsChipToggle component', () => {
    render(<RdsChipToggle value={TEST_VALUE} onChange={noop} label={TEST_LABEL} />);
    const chip = screen.getByRole('listitem');
    expect(chip).toBeDefined();
    expect(screen.getByText(TEST_LABEL)).toBeDefined();
  });

  it('renders the RdsChipToggle with the proper id when specified', () => {
    render(<RdsChipToggle value={TEST_VALUE} onChange={noop} label={TEST_LABEL} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it('renders the default RdsChipToggle component with the expected value', () => {
    render(<RdsChipToggle value={TEST_VALUE} onChange={noop} label={TEST_LABEL} id={TEST_ID} />);
    const chip = screen.getByRole('checkbox');
    expect((chip as HTMLInputElement).value).toBe(TEST_VALUE);
  });

  it('renders the RdsChipToggle component with icon + label', async () => {
    render(<RdsChipToggle value={TEST_VALUE} onChange={noop} label={TEST_LABEL} icon={TEST_ICON} />);
    const chip = screen.getByRole('listitem');
    expect(chip).toBeDefined();
    expect(screen.getByText(TEST_LABEL)).toBeDefined();
    waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeDefined());
  });

  it('renders the RdsChipToggle component with icon only', async () => {
    render(<RdsChipToggle value={TEST_VALUE} onChange={noop} icon={TEST_ICON} />);
    const chip = screen.getByRole('listitem');
    expect(chip).toBeDefined();
    waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeDefined());
  });
});
