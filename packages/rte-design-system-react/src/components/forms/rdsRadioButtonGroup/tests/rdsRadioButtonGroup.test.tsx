/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { RdsRadioButtonGroup } from '../RdsRadioButtonGroup.tsx';
import { RdsRadioButton } from '../../rdsRadioButton/RdsRadioButton.tsx';

const TEST_NAME = 'radio-name';
const TEST_LABEL = 'test-label';
const TEST_ID = 'my-radio-button-group';
const TEST_CHECKED_POSITION = 1;

describe('RdsRadioButtonGroup', () => {
  it('renders the default RdsRadioButtonGroup component', () => {
    render(
      <RdsRadioButtonGroup label={TEST_LABEL} name={TEST_NAME}>
        <RdsRadioButton label="Option 1" value="op1" />
        <RdsRadioButton label="Option 2" value="op2" />
        <RdsRadioButton label="Option 3" value="op3" />
        <RdsRadioButton label="Option 4" value="op4" />
      </RdsRadioButtonGroup>,
    );
    const radioButton = screen.getByRole('radiogroup');
    expect(radioButton).toBeInTheDocument();
  });

  it('renders the RdsRadioButtonGroup with the proper id when specified', () => {
    render(
      <RdsRadioButtonGroup id={TEST_ID} label={TEST_LABEL} name={TEST_NAME}>
        <RdsRadioButton label="Option 1" value="op1" />
        <RdsRadioButton label="Option 2" value="op2" />
        <RdsRadioButton label="Option 3" value="op3" />
        <RdsRadioButton label="Option 4" value="op4" />
      </RdsRadioButtonGroup>,
    );
    const radioButtonGroup = screen.getByRole('radiogroup');
    expect(radioButtonGroup).toBeInTheDocument();
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length).toBe(4);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsRadioButtonGroup component with disabled', () => {
    render(
      <RdsRadioButtonGroup id={TEST_ID} label={TEST_LABEL} name={TEST_NAME} disabled>
        <RdsRadioButton label="Option 1" value="op1" />
        <RdsRadioButton label="Option 2" value="op2" />
        <RdsRadioButton label="Option 3" value="op3" />
        <RdsRadioButton label="Option 4" value="op4" />
      </RdsRadioButtonGroup>,
    );
    const radioButtonGroup = screen.getByRole('radiogroup');
    expect(radioButtonGroup).toBeDisabled();
    const radioButtons = screen.getAllByRole('radio');
    radioButtons.forEach((radioButton) => expect(radioButton).toBeDisabled());
  });

  it('renders the RdsRadioButtonGroup component with checked', () => {
    render(
      <RdsRadioButtonGroup id={TEST_ID} label={TEST_LABEL} name={TEST_NAME}>
        <RdsRadioButton label="Option 1" value="op1" />
        <RdsRadioButton label="Option 2" value="op2" defaultChecked />
        <RdsRadioButton label="Option 3" value="op3" />
        <RdsRadioButton label="Option 4" value="op4" />
      </RdsRadioButtonGroup>,
    );
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons[TEST_CHECKED_POSITION]).toBeChecked();
  });

  it('renders the RdsRadioButtonGroup component with disabled + checked', () => {
    render(
      <RdsRadioButtonGroup id={TEST_ID} label={TEST_LABEL} name={TEST_NAME} disabled>
        <RdsRadioButton label="Option 1" value="op1" />
        <RdsRadioButton label="Option 2" value="op2" defaultChecked />
        <RdsRadioButton label="Option 3" value="op3" />
        <RdsRadioButton label="Option 4" value="op4" />
      </RdsRadioButtonGroup>,
    );
    const radioButtons = screen.getAllByRole('radio');
    radioButtons.forEach((radioButton) => expect(radioButton).toBeDisabled());
    expect(radioButtons[TEST_CHECKED_POSITION]).toBeChecked();
  });
});
