/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import { RdsFileInput } from '../RdsFileInput.tsx';

const TEST_ID = 'Id';
const TEST_LABEL = 'Label';
const TEST_SECOND_LABEL = 'Second label';
const TEST_FILE = new File(['file content'], 'filename.txt', { type: 'text/plain' });
const TEST_INFORMATION_TEXT = 'Information text';
const TEST_ACCEPTED_FILES = ['image/svg+xml', 'text/plain'];
const TEST_HELPER_TEXT = 'Helper text';
const TEST_MAX_SIZE = 1024;
const TEST_ERROR = false;

const defaultInputSetup = () => {
  const onChange = vitest.fn();
  const component = render(
    <RdsFileInput
      id={TEST_ID}
      file={TEST_FILE}
      informationText={TEST_INFORMATION_TEXT}
      label={TEST_LABEL}
      secondLabel={TEST_SECOND_LABEL}
      acceptedFileTypes={TEST_ACCEPTED_FILES}
      maxSizeFile={TEST_MAX_SIZE}
      error={TEST_ERROR}
      helperText={TEST_HELPER_TEXT}
      onChange={onChange}
    />,
  );
  const label: HTMLElement = screen.getByText(TEST_LABEL);
  const secondLabel: HTMLSpanElement = screen.getByText(TEST_SECOND_LABEL);
  const helper: HTMLSpanElement = screen.getByText(TEST_HELPER_TEXT);

  return { ...component, label, helper, secondLabel, onChange };
};

describe('RdsFileInput', () => {
  it('renders the default RdsFileInput component with the proper values', () => {
    const { label, helper, secondLabel } = defaultInputSetup();
    expect(label).toBeInTheDocument();
    expect(helper).toBeInTheDocument();
    expect(secondLabel).toBeInTheDocument();
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });
});
