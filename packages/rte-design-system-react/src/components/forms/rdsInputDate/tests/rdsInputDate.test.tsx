/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { fireEvent, render, screen } from '@testing-library/react';

import { userEvent } from '@testing-library/user-event';
import { RdsInputDate, RdsInputDateProps } from '../RdsInputDate.tsx';

const TEST_NAME = 'my-input-date';
const TEST_LABEL = 'Label';
const TEST_HELPER = 'Helper';
const TEST_ID = 'Id';

const defaultInputSetup = (props: Omit<RdsInputDateProps, 'label'>) => {
  const onChange = vitest.fn();
  const component = render(
    <RdsInputDate
      name={TEST_NAME}
      helperText={TEST_HELPER}
      id={TEST_ID}
      onChange={onChange}
      label={TEST_LABEL}
      {...props}
    />,
  );
  const inputDate = document.querySelector<HTMLInputElement>(`#${TEST_ID}-date`);
  const inputTime = document.querySelector<HTMLInputElement>(`#${TEST_ID}-time`);
  const label = screen.getByText<HTMLSpanElement>(TEST_LABEL);
  const helper = screen.getByText<HTMLSpanElement>(TEST_HELPER);
  return { ...component, inputDate, inputTime, label, helper, onChange };
};

describe('RdsInputDate', () => {
  it('renders the default dateOnly component', () => {
    const { inputDate, inputTime, label, helper } = defaultInputSetup({ inputDateType: 'dateOnly' });
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
    expect(inputDate).toBeInTheDocument();
    expect(inputTime).not.toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(helper).toBeInTheDocument();
    expect(inputDate).not.toHaveAttribute('disabled');
    expect(inputDate!.validity.customError).toBe(false);
  });
  it('renders the default timeOnly component', () => {
    const { inputDate, inputTime, label, helper } = defaultInputSetup({ inputDateType: 'timeOnly' });
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
    expect(inputDate).not.toBeInTheDocument();
    expect(inputTime).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(helper).toBeInTheDocument();
    expect(inputTime).not.toHaveAttribute('disabled');
    expect(inputTime!.validity.customError).toBe(false);
  });
  it('renders the default dateAndTime component', () => {
    const { inputDate, inputTime, label, helper } = defaultInputSetup({ inputDateType: 'dateAndTime' });
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
    expect(inputDate).toBeInTheDocument();
    expect(inputTime).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(helper).toBeInTheDocument();
    expect(inputDate).not.toHaveAttribute('disabled');
    expect(inputTime).not.toHaveAttribute('disabled');
    expect(inputDate!.validity.customError).toBe(false);
    expect(inputTime!.validity.customError).toBe(false);
  });
  it('renders the dateAndTime component as required', () => {
    const { inputDate, inputTime } = defaultInputSetup({ inputDateType: 'dateAndTime', required: true });
    expect(screen.getByText('*')).toBeInTheDocument();
    expect(inputDate).toHaveAttribute('required');
    expect(inputTime).toHaveAttribute('required');
  });
  it('renders the dateAndTime component as disabled', () => {
    const { inputDate, inputTime } = defaultInputSetup({ inputDateType: 'dateAndTime', disabled: true });
    expect(inputDate).toHaveAttribute('disabled');
    expect(inputTime).toHaveAttribute('disabled');
  });
  it('should call the onChange function when the event fires', () => {
    const { inputDate, inputTime, onChange } = defaultInputSetup({ inputDateType: 'dateAndTime' });
    fireEvent.change(inputDate!, { target: { value: '1997-05-21' } });
    expect(inputDate).toHaveValue('1997-05-21');
    expect(onChange).toHaveBeenNthCalledWith(1, new Date('1997-05-21T00:00:00'));
    fireEvent.change(inputTime!, { target: { value: '13:37' } });
    expect(onChange).toHaveBeenNthCalledWith(2, new Date('1997-05-21T13:37:00'));
  });
  it('should call the onChange function when the user input changes', async () => {
    const user = userEvent.setup();
    const { inputDate, inputTime, onChange } = defaultInputSetup({ inputDateType: 'dateAndTime' });
    await user.click(inputDate!);
    await user.type(inputDate!, '1997-05-21');
    expect(inputDate).toHaveValue('1997-05-21');
    expect(onChange).toHaveBeenNthCalledWith(1, new Date('1997-05-21T00:00:00'));
    await user.click(inputTime!);
    await user.type(inputTime!, '131');
    expect(onChange).toHaveBeenNthCalledWith(2, new Date('1997-05-21T13:01:00'));
    await user.clear(inputDate!);
    expect(onChange).toHaveBeenNthCalledWith(3, undefined);
  });
  it('should have the correct time precision hour', () => {
    const { inputTime } = defaultInputSetup({ inputDateType: 'dateAndTime', timePrecision: 'hour' });
    expect(inputTime).toHaveAttribute('step', '3600');
  });
  it('should have the correct time precision minute', () => {
    const { inputTime } = defaultInputSetup({ inputDateType: 'dateAndTime', timePrecision: 'minute' });
    expect(inputTime).toHaveAttribute('step', '60');
  });
  it('should have the correct time precision second', () => {
    const { inputTime } = defaultInputSetup({ inputDateType: 'dateAndTime', timePrecision: 'second' });
    expect(inputTime).toHaveAttribute('step', '1');
  });
  it('should have the correct time precision millisecond', () => {
    const { inputTime } = defaultInputSetup({ inputDateType: 'dateAndTime', timePrecision: 'millisecond' });
    expect(inputTime).toHaveAttribute('step', '0.001');
  });
});
