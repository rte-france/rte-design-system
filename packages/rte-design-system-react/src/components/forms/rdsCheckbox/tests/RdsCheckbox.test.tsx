/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { RdsCheckbox } from '../RdsCheckbox.tsx';

const TEST_LABEL = 'My checkbox';
const TEST_ID = 'my-checkbox';
const TEST_NAME = 'checkbox';

describe('RdsCheckbox', () => {
  it('renders the basic RdsCheckbox component', () => {
    render(<RdsCheckbox label={TEST_LABEL} name={TEST_NAME} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText(TEST_LABEL)).toBeInTheDocument();
  });

  it('renders the RdsCheckbox component with no label', () => {
    render(<RdsCheckbox name={TEST_NAME} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('can properly find the checkbox when the id is specified', () => {
    render(<RdsCheckbox label={TEST_LABEL} id={TEST_ID} name={TEST_NAME} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsCheckbox with checked', () => {
    render(<RdsCheckbox label={TEST_LABEL} name={TEST_NAME} checked={true} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('renders the RdsCheckbox when disabled', () => {
    render(<RdsCheckbox label={TEST_LABEL} name={TEST_NAME} disabled={true} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
