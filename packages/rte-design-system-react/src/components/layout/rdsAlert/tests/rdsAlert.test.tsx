/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';

import { RdsAlert } from '../RdsAlert.tsx';
import { RdsIconId } from '@/utils/index.ts';

const TEST_MESSAGE = 'Label';
const TEST_ICON = RdsIconId.Add;
const TEST_CLOSE_ICON = RdsIconId.Close;
const TEST_ID = 'my-alert';
const TEST_ACTION = {
  label: 'test-action',
  onClick: vi.fn(),
};

describe('RdsAlert', () => {
  it('renders the default RdsAlert component', () => {
    render(<RdsAlert message={TEST_MESSAGE} />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });

  it('renders the RdsAlert with the proper id when specified', () => {
    render(<RdsAlert message={TEST_MESSAGE} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsAlert component with delete', async () => {
    render(<RdsAlert message={TEST_MESSAGE} icon={TEST_ICON} onClose={vi.fn()} />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.textContent).toContain(TEST_MESSAGE);
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
    const closeIcon = await waitFor(() => screen.getByTitle(TEST_CLOSE_ICON));
    expect(closeIcon).toBeInTheDocument();
    expect(closeButton.contains(closeIcon)).toBe(true);
  });

  it('renders the RdsAlert component with action', () => {
    render(<RdsAlert message={TEST_MESSAGE} icon={TEST_ICON} action={TEST_ACTION} />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.textContent).toContain(TEST_MESSAGE);
    const actionButton = screen.getByRole('button');
    expect(actionButton).toBeInTheDocument();
    expect(actionButton.textContent).toBe(TEST_ACTION.label);
  });

  it('renders the RdsAlert component with action + delete', async () => {
    render(<RdsAlert message={TEST_MESSAGE} icon={TEST_ICON} action={TEST_ACTION} onClose={vi.fn()} />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert.textContent).toContain(TEST_MESSAGE);

    const [actionButton, closeButton] = screen.getAllByRole('button');
    expect(closeButton).toBeInTheDocument();
    const closeIcon = await waitFor(() => screen.getByTitle(TEST_CLOSE_ICON));
    expect(closeIcon).toBeInTheDocument();
    expect(closeButton?.contains(closeIcon)).toBe(true);

    expect(actionButton).toBeInTheDocument();
    expect(actionButton?.textContent).toBe(TEST_ACTION.label);
  });
});
