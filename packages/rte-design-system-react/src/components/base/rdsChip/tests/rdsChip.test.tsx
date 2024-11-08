/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { RdsIconId } from '@/utils/index.ts';
import { RdsChip } from '@/components/base/rdsChip/RdsChip.tsx';

const TEST_LABEL = 'Label';
const TEST_ICON = RdsIconId.Add;
const TEST_CLOSE = RdsIconId.Close;
const TEST_ID = 'my-chip';
const testOnClose = () => {};

describe('Rds Chip', () => {
  it('renders the default Rds Chip component', () => {
    render(<RdsChip label={TEST_LABEL} />);
    const chip = screen.getByRole('listitem');
    expect(chip).toBeInTheDocument();
    expect(screen.getByText(TEST_LABEL)).toBeInTheDocument();
  });

  it('renders the RdsChip with the proper id when specified', () => {
    render(<RdsChip label={TEST_LABEL} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the Rds Chip component with icon + label', async () => {
    render(<RdsChip label={TEST_LABEL} icon={TEST_ICON} />);
    const chip = screen.getByRole('listitem');
    expect(chip).toBeInTheDocument();
    expect(screen.getByText(TEST_LABEL)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });

  it('renders the Rds Chip component with label + delete', async () => {
    render(<RdsChip label={TEST_LABEL} onClose={testOnClose} />);
    const chip = screen.getByRole('listitem');
    expect(chip).toBeInTheDocument();
    expect(screen.getByText(TEST_LABEL)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTitle(TEST_CLOSE)).toBeInTheDocument());
  });

  it('renders the Rds Chip component with icon + label + delete', async () => {
    render(<RdsChip label={TEST_LABEL} icon={TEST_ICON} onClose={testOnClose} />);
    const chip = screen.getByRole('listitem');
    expect(chip).toBeInTheDocument();
    expect(screen.getByText(TEST_LABEL)).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTitle(TEST_CLOSE)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });

  it('renders the Rds Chip component with icon only', async () => {
    render(<RdsChip icon={TEST_ICON} />);
    const chip = screen.getByRole('listitem');
    expect(chip).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });
});
