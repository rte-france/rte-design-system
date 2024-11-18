/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { RdsCheckbox } from '../../rdsCheckbox/RdsCheckbox.tsx';
import { RdsCheckboxGroupWrapper } from '../RdsCheckboxGroupWrapper.tsx';
import { noop } from '@/utils/index.ts';

const TEST_LABEL = 'My checkboxes';
const TEST_CHECKBOX_CONTROL_LABEL = 'My control checkbox';
const TEST_CHECKBOXES_VALUES = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'];
const TEST_ID = 'my-checkboxes';
const TEST_NAME = 'test-checkboxes';
const TEST_CHECKBOXES_NUMBER = 6;
const TEST_DISBLED_CHECKBOXES = ['test3', 'test6'];
const TEST_CHECKED_CHECKBOXES = ['test1', 'test5'];
const TEST_CHECKBOXES = TEST_CHECKBOXES_VALUES.map((value, idx) =>
  idx % 2 === 0 ? (
    <div key={idx}>
      <RdsCheckbox value={value} disabled={TEST_DISBLED_CHECKBOXES.includes(value)} />
    </div>
  ) : (
    <RdsCheckbox key={idx} value={value} disabled={TEST_DISBLED_CHECKBOXES.includes(value)} />
  ),
);

describe('RdsCheckbox', () => {
  it('basic RdsCheckboxGroupWrapper component', async () => {
    render(
      <RdsCheckboxGroupWrapper id={TEST_ID} name={TEST_NAME} label={TEST_LABEL} onChange={noop} checkedValues={[]}>
        {TEST_CHECKBOXES}
      </RdsCheckboxGroupWrapper>,
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole('group')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(TEST_LABEL)).toBeInTheDocument());
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the expected number of checkboxes', () => {
    render(
      <RdsCheckboxGroupWrapper id={TEST_ID} name={TEST_NAME} label={TEST_LABEL} onChange={noop} checkedValues={[]}>
        {TEST_CHECKBOXES}
      </RdsCheckboxGroupWrapper>,
    );

    expect(screen.getAllByRole('checkbox').length).toBe(TEST_CHECKBOXES_NUMBER);
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the expected number of checked checkboxes', () => {
    render(
      <RdsCheckboxGroupWrapper
        id={TEST_ID}
        name={TEST_NAME}
        label={TEST_LABEL}
        onChange={noop}
        checkedValues={TEST_CHECKED_CHECKBOXES}
      >
        {TEST_CHECKBOXES}
      </RdsCheckboxGroupWrapper>,
    );

    expect(screen.getAllByRole('checkbox').filter((element) => (element as HTMLInputElement).checked).length).toBe(
      TEST_CHECKED_CHECKBOXES.length,
    );
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the expected number of checked checkboxes', () => {
    render(
      <RdsCheckboxGroupWrapper
        id={TEST_ID}
        name={TEST_NAME}
        label={TEST_LABEL}
        onChange={noop}
        checkedValues={TEST_CHECKED_CHECKBOXES}
      >
        {TEST_CHECKBOXES}
      </RdsCheckboxGroupWrapper>,
    );

    expect(screen.getAllByRole('checkbox').filter((element) => (element as HTMLInputElement).checked).length).toBe(
      TEST_CHECKED_CHECKBOXES.length,
    );
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the expected number of disabled checkboxes', () => {
    render(
      <RdsCheckboxGroupWrapper
        id={TEST_ID}
        name={TEST_NAME}
        label={TEST_LABEL}
        onChange={noop}
        checkedValues={TEST_CHECKED_CHECKBOXES}
      >
        {TEST_CHECKBOXES}
      </RdsCheckboxGroupWrapper>,
    );

    expect(screen.getAllByRole('checkbox').filter((element) => (element as HTMLInputElement).disabled).length).toBe(
      TEST_DISBLED_CHECKBOXES.length,
    );
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the checkboxControl', () => {
    render(
      <RdsCheckboxGroupWrapper
        id={TEST_ID}
        name={TEST_NAME}
        label={TEST_LABEL}
        onChange={noop}
        checkedValues={TEST_CHECKED_CHECKBOXES}
      >
        <div>
          <RdsCheckbox label={TEST_CHECKBOX_CONTROL_LABEL} checkboxControl />
          {TEST_CHECKBOXES}
        </div>
      </RdsCheckboxGroupWrapper>,
    );

    expect(screen.getByText(TEST_CHECKBOX_CONTROL_LABEL)).toBeInTheDocument();
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the checkboxControl with indeterminate attribute at true due to some checked checkbox', () => {
    render(
      <RdsCheckboxGroupWrapper
        id={TEST_ID}
        name={TEST_NAME}
        label={TEST_LABEL}
        onChange={noop}
        checkedValues={TEST_CHECKED_CHECKBOXES}
      >
        <div>
          <RdsCheckbox label={TEST_CHECKBOX_CONTROL_LABEL} checkboxControl />
          {TEST_CHECKBOXES}
        </div>
      </RdsCheckboxGroupWrapper>,
    );

    expect(
      screen.getAllByRole('checkbox').find((element) => (element as HTMLInputElement).indeterminate),
    ).toBeDefined();
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the checkboxControl with indeterminate attribute at true due to all enabled and checked checkbox', () => {
    render(
      <RdsCheckboxGroupWrapper
        id={TEST_ID}
        name={TEST_NAME}
        label={TEST_LABEL}
        onChange={noop}
        checkedValues={TEST_CHECKBOXES_VALUES.filter((val) => !TEST_DISBLED_CHECKBOXES.includes(val))}
      >
        <div>
          <RdsCheckbox label={TEST_CHECKBOX_CONTROL_LABEL} checkboxControl />
          {TEST_CHECKBOXES}
        </div>
      </RdsCheckboxGroupWrapper>,
    );

    expect(
      screen.getAllByRole('checkbox').find((element) => (element as HTMLInputElement).indeterminate),
    ).not.toBeDefined();

    expect(
      screen.getAllByRole('checkbox').find((element) => (element as HTMLInputElement).value === 'checkbox_control'),
    ).toBeChecked();
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the checkboxControl with indeterminate attribute at false due to all unchecked checkbox', () => {
    render(
      <RdsCheckboxGroupWrapper id={TEST_ID} name={TEST_NAME} label={TEST_LABEL} onChange={noop} checkedValues={[]}>
        <div>
          <RdsCheckbox label={TEST_CHECKBOX_CONTROL_LABEL} checkboxControl />
          {TEST_CHECKBOXES}
        </div>
      </RdsCheckboxGroupWrapper>,
    );

    expect(
      screen.getAllByRole('checkbox').find((element) => (element as HTMLInputElement).indeterminate),
    ).not.toBeDefined();

    expect(
      screen.getAllByRole('checkbox').find((element) => (element as HTMLInputElement).value === 'checkbox_control'),
    ).not.toBeChecked();
  });

  it('RdsCheckboxGroupWrapper component with checkboxes children with the checkboxControl with indeterminate attribute at false due to all unchecked checkbox', () => {
    render(
      <RdsCheckboxGroupWrapper id={TEST_ID} name={TEST_NAME} label={TEST_LABEL} onChange={noop} checkedValues={[]}>
        <div>
          <RdsCheckbox label={TEST_CHECKBOX_CONTROL_LABEL} checkboxControl />
          {TEST_CHECKBOXES}
        </div>
      </RdsCheckboxGroupWrapper>,
    );

    expect(
      screen.getAllByRole('checkbox').find((element) => (element as HTMLInputElement).indeterminate),
    ).not.toBeDefined();

    expect(
      screen.getAllByRole('checkbox').find((element) => (element as HTMLInputElement).value === 'checkbox_control'),
    ).not.toBeChecked();
  });

  it('Should trigger onChange when the checkbox control value change', () => {
    const onChange = vitest.fn();
    render(
      <RdsCheckboxGroupWrapper
        id={TEST_ID}
        name={TEST_NAME}
        label={TEST_LABEL}
        onChange={onChange}
        checkedValues={TEST_CHECKBOXES_VALUES.filter((val) => !TEST_DISBLED_CHECKBOXES.includes(val))}
      >
        <div>
          <RdsCheckbox label={TEST_CHECKBOX_CONTROL_LABEL} checkboxControl />
          {TEST_CHECKBOXES}
        </div>
      </RdsCheckboxGroupWrapper>,
    );

    const checkboxes: HTMLInputElement[] = screen.getAllByRole('checkbox');
    const [checkboxControlElement] = checkboxes;
    if (!checkboxControlElement) {
      expect(checkboxControlElement).toBeDefined();
      return;
    }
    expect(checkboxControlElement.value).toBe('checkbox_control');

    fireEvent.click(checkboxControlElement, { target: { value: false } });

    expect(onChange).toBeCalledWith('', false, true);
  });
});
