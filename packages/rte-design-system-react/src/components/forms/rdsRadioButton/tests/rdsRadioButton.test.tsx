/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { RdsRadioButton } from '../RdsRadioButton.tsx';

const TEST_LABEL = 'label';
const TEST_VALUE = 'test-value';
const TEST_NAME = 'radio-name';
const TEST_ID = 'my-radio-radioButton';

describe('RdsRadioButton', () => {
  it('renders the default RdsRadioButton component', () => {
    render(<RdsRadioButton label={TEST_LABEL} name={TEST_NAME} value={TEST_VALUE} />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
  });

  it('renders the RdsRadioButton with the proper id when specified', () => {
    render(<RdsRadioButton label={TEST_LABEL} id={TEST_ID} name={TEST_NAME} value={TEST_VALUE} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsRadioButton component with disabled', () => {
    render(<RdsRadioButton label={TEST_LABEL} id={TEST_ID} name={TEST_NAME} value={TEST_VALUE} disabled />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeDisabled();
  });

  it('renders the RdsRadioButton component with checked', () => {
    render(<RdsRadioButton label={TEST_LABEL} id={TEST_ID} name={TEST_NAME} value={TEST_VALUE} defaultChecked />);
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeChecked();
  });

  it('renders the RdsRadioButton component with disabled + checked', () => {
    render(
      <RdsRadioButton label={TEST_LABEL} id={TEST_ID} name={TEST_NAME} value={TEST_VALUE} defaultChecked disabled />,
    );
    const radioButton = screen.getByRole('radio');
    expect(radioButton).toBeInTheDocument();
    expect(radioButton).toBeDisabled();
    expect(radioButton).toBeChecked();
  });
});
