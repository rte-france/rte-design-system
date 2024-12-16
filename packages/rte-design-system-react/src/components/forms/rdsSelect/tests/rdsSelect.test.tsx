/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import StdSelect from '../RdsSelect.tsx';

const TEST_ID = 'select-test-id';
const TEST_LABEL = 'The label';
const TEST_DEFAULT_LABEL = 'My Select';
const TEST_HELPER_TEXT = 'This is the helper text';
const TEST_DISPLAY_VALUE = 'Selected value';

it('properly renders the select with basic settings', () => {
  render(<StdSelect placeholder={TEST_DEFAULT_LABEL} label={TEST_DEFAULT_LABEL} />);
  const select = screen.getByRole('button');
  expect(select).toBeInTheDocument();
  expect(select).toHaveTextContent(TEST_DEFAULT_LABEL);
});

it('can properly find the select when the id is specified', () => {
  render(<StdSelect id={TEST_ID} placeholder={TEST_DEFAULT_LABEL} label={TEST_LABEL} />);
  expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
});

it('renders the label when showLabel is true', () => {
  render(<StdSelect placeholder={TEST_DEFAULT_LABEL} label={TEST_LABEL} showLabel />);
  expect(screen.getByText(TEST_LABEL)).toBeInTheDocument();
});

it('renders the asterisk when required is true and showLabel is true', () => {
  render(<StdSelect placeholder={TEST_DEFAULT_LABEL} label={TEST_LABEL} showLabel required />);
  expect(screen.getByText('*')).toBeInTheDocument();
});

it('renders the helperText when passed', () => {
  render(<StdSelect placeholder={TEST_DEFAULT_LABEL} label={TEST_LABEL} helperText={TEST_HELPER_TEXT} />);
  expect(screen.getByText(TEST_HELPER_TEXT)).toBeInTheDocument();
});

it('replaces the default label with the display value when passed', () => {
  render(<StdSelect placeholder={TEST_DEFAULT_LABEL} label={TEST_LABEL} displayValue={TEST_DISPLAY_VALUE} />);
  const [select, clearButton] = screen.getAllByRole('button');
  expect(select).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();
  expect(select).toHaveTextContent(TEST_DISPLAY_VALUE);
  expect(select).not.toHaveTextContent(TEST_DEFAULT_LABEL);
});
