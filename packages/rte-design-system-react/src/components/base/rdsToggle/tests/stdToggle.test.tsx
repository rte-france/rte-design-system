/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { act, render, screen } from '@testing-library/react';

import { MouseEvent } from 'react';
import { RdsToggle } from '../RdsToggle.tsx';
import { getToggleFocusHandlers, joinId } from '../utils.ts';
import { noop, RdsIconId } from '@/utils/index.ts';

let SET_STATE_MOCK = vitest.fn();
beforeEach(() => (SET_STATE_MOCK = vitest.fn()));

const TEST_SELECTED_VALUE = 'edit';
const TEST_TEXT_ID_DEFAULT_VALUE = 'edit_text_btn';

const TEST_ICON_ID_DEFAULT_VALUE = 'edit_icon_btn';

const TEST_TEXT = [
  { id: 'add_text_btn', value: 'add', onChange: noop, content: 'Add' },
  { id: 'edit_text_btn', value: 'edit', onChange: noop, content: 'Edit' },
  { id: 'delete_text_btn', value: 'delete', onChange: noop, content: 'Delete' },
];

const TEST_ICON = [
  { id: 'add_icon_btn', value: 'add', onChange: noop, content: RdsIconId.Add },
  { id: 'edit_icon_btn', value: 'edit', onChange: noop, content: RdsIconId.Edit },
  { id: 'delete_icon_btn', value: 'delete', onChange: noop, content: RdsIconId.Delete },
];

const TEST_TEXT_ID_ARRAY = TEST_TEXT.map((item) => item.id);
const TEST_ICON_ID_ARRAY = TEST_ICON.map((item) => item.id);

const TEST_NAME = 'toggle-name';
const TEST_ID = 'my-toggle';

describe('RdsToggle', () => {
  it('renders the default RdsToggle with texts', () => {
    render(<RdsToggle id={TEST_ID} name={TEST_NAME} items={TEST_TEXT} />);
    const toggle = screen.getByRole('group');
    expect(toggle).toBeInTheDocument();
    const items = screen.getAllByRole('radio');
    expect(items.length).toBe(3);
    expect(items.every((item, idx) => item.id === TEST_TEXT_ID_ARRAY[idx])).toBe(true);
  });
  it('renders the default RdsToggle with icons', () => {
    render(<RdsToggle id={TEST_ID} name={TEST_NAME} items={TEST_ICON} />);
    const toggle = screen.getByRole('group');
    expect(toggle).toBeInTheDocument();
    const items = screen.getAllByRole('radio');
    expect(items.length).toBe(3);
    expect(items.every((item, idx) => item.id === TEST_ICON_ID_ARRAY[idx])).toBe(true);
  });
  it('renders the RdsToggle with texts + disabled', () => {
    render(<RdsToggle id={TEST_ID} name={TEST_NAME} items={TEST_TEXT} disabled />);
    const toggle = screen.getByRole('group');
    const items = screen.getAllByRole('radio');
    expect(items.every((item, idx) => item.id === TEST_TEXT_ID_ARRAY[idx])).toBe(true);
    expect(toggle).toBeDisabled();
  });
  it('renders the RdsToggle with icons + disabled', () => {
    render(<RdsToggle id={TEST_ID} name={TEST_NAME} items={TEST_ICON} disabled />);
    const toggle = screen.getByRole('group');
    expect(toggle).toBeInTheDocument();
    const items = screen.getAllByRole('radio');
    expect(items.every((item, idx) => item.id === TEST_ICON_ID_ARRAY[idx])).toBe(true);
    expect(toggle).toBeDisabled();
  });
  it('renders the RdsToggle with texts + default value', () => {
    render(<RdsToggle id={TEST_ID} name={TEST_NAME} items={TEST_TEXT} defaultSelected={TEST_SELECTED_VALUE} />);
    const toggle = screen.getByRole('group');
    expect(toggle).toBeInTheDocument();
    const items = screen.getAllByRole('radio');
    const checkedItem = items.filter((item) => item.id === TEST_TEXT_ID_DEFAULT_VALUE);
    expect(checkedItem.length).toBe(1);
    expect(checkedItem[0]).toBeChecked();
    expect(items.every((item, idx) => item.id === TEST_TEXT_ID_ARRAY[idx])).toBe(true);
  });
  it('renders the RdsToggle with icons + default value', () => {
    render(<RdsToggle id={TEST_ID} name={TEST_NAME} items={TEST_ICON} defaultSelected={TEST_SELECTED_VALUE} />);
    const toggle = screen.getByRole('group');
    expect(toggle).toBeInTheDocument();
    const items = screen.getAllByRole('radio');
    const checkedItem = items.filter((item) => item.id === TEST_ICON_ID_DEFAULT_VALUE);
    expect(checkedItem.length).toBe(1);
    expect(checkedItem[0]).toBeChecked();
    expect(items.every((item, idx) => item.id === TEST_ICON_ID_ARRAY[idx])).toBe(true);
  });
  it('renders the RdsToggle with texts + default value + disabled', () => {
    render(
      <RdsToggle id={TEST_ID} name={TEST_NAME} items={TEST_TEXT} defaultSelected={TEST_SELECTED_VALUE} disabled />,
    );
    const toggle = screen.getByRole('group');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeDisabled();
    const items = screen.getAllByRole('radio');
    const checkedItem = items.filter((item) => item.id === TEST_TEXT_ID_DEFAULT_VALUE);
    expect(checkedItem.length).toBe(1);
    expect(checkedItem[0]).toBeChecked();
  });
  it('renders the RdsToggle with icons + default value + disabled', () => {
    render(
      <RdsToggle id={TEST_ID} name={TEST_NAME} items={TEST_ICON} defaultSelected={TEST_SELECTED_VALUE} disabled />,
    );
    const toggle = screen.getByRole('group');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toBeDisabled();
    const items = screen.getAllByRole('radio');
    const checkedItem = items.filter((item) => item.id === TEST_ICON_ID_DEFAULT_VALUE);
    expect(checkedItem.length).toBe(1);
    expect(checkedItem[0]).toBeChecked();
  });
});

describe('joinId function', () => {
  it('should join strings with space correctly', () => {
    const res = joinId('hello world');
    expect(res).toBe('hello-world');
  });

  it('should return same string without spaces', () => {
    const res = joinId('hello');
    expect(res).toBe('hello');
  });
});

describe('getToggleFocusHandlers function', () => {
  it('should return an object with onFocus, onClick, and onBlur handlers', () => {
    const focusHandlers = getToggleFocusHandlers(SET_STATE_MOCK);

    expect(focusHandlers).toHaveProperty('onFocus');
    expect(focusHandlers).toHaveProperty('onClick');
    expect(focusHandlers).toHaveProperty('onBlur');

    expect(typeof focusHandlers.onFocus).toBe('function');
    expect(typeof focusHandlers.onClick).toBe('function');
    expect(typeof focusHandlers.onBlur).toBe('function');
  });

  it('onFocus handler should set state to true', () => {
    const result = getToggleFocusHandlers(SET_STATE_MOCK);

    act(() => {
      result.onFocus();
    });

    expect(SET_STATE_MOCK).toHaveBeenCalledWith(true);
  });

  it('onClick handler should set state to false if clientX and clientY are not zero', () => {
    const result = getToggleFocusHandlers(SET_STATE_MOCK);

    act(() => {
      const mockEvent = { clientX: 10, clientY: 20 } as MouseEvent<HTMLInputElement>;
      result.onClick(mockEvent);
    });

    expect(SET_STATE_MOCK).toHaveBeenCalledWith(false);
  });

  it('onClick handler should not set state if clientX or clientY is zero', () => {
    const result = getToggleFocusHandlers(SET_STATE_MOCK);

    act(() => {
      const mockEvent = { clientX: 0, clientY: 0 } as MouseEvent<HTMLInputElement>;
      result.onClick(mockEvent);
    });

    expect(SET_STATE_MOCK).not.toHaveBeenCalled();
  });

  it('onBlur handler should set state to false', () => {
    const result = getToggleFocusHandlers(SET_STATE_MOCK);

    act(() => {
      result.onBlur();
    });

    expect(SET_STATE_MOCK).toHaveBeenCalledWith(false);
  });
});
