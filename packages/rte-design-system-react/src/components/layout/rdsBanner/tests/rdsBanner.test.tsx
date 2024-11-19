/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';

import { RdsBanner } from '../RdsBanner.tsx';
import { RdsIconId } from '@/utils/index.ts';

const TEST_MESSAGE = 'Label';
const TEST_CLOSE_ICON = RdsIconId.Close;
const TEST_ID = 'my-alert';

describe('RdsBanner', () => {
  it('renders the default RdsBanner component', () => {
    render(<RdsBanner message={TEST_MESSAGE} />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();

    render(<RdsBanner message={TEST_MESSAGE} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsBanner component with delete', async () => {
    render(<RdsBanner message={TEST_MESSAGE} onClose={vi.fn()} />);
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
    const closeIcon = await waitFor(() => screen.getByTitle(TEST_CLOSE_ICON));
    expect(closeIcon).toBeInTheDocument();
    expect(closeButton.contains(closeIcon)).toBe(true);
  });
});
