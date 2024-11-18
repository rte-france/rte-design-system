/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';

import { RdsButton } from '../RdsButton.tsx';
import { RdsIconId } from '@/utils/mappings/iconMaps.ts';

const TEST_LABEL = 'Label';
const TEST_ICON = RdsIconId.Add;
const TEST_ID = 'my-button';

describe('StdButton', () => {
  it('renders the default StdButton component', () => {
    render(<RdsButton label={TEST_LABEL} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(TEST_LABEL);
  });

  it('renders the StdButton with the proper id when specified', () => {
    render(<RdsButton label={TEST_LABEL} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the StdButton component with icon + label', async () => {
    render(<RdsButton label={TEST_LABEL} icon={TEST_ICON} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toContain(TEST_LABEL);
    await waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });

  it('renders the StdButton component with icon and no label', async () => {
    render(<RdsButton icon={TEST_ICON} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });
});
