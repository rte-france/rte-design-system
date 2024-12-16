/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import RdsPaginationControl from '../RdsPaginationControl.tsx';
import { noop } from '@/utils/index.ts';

const TEST_ID = 'pagination-control';
const TEST_LABEL = 'label';

describe('RdsPaginationControl', () => {
  it('renders the default RdsPaginationControl component with the proper id', () => {
    render(
      <RdsPaginationControl label={TEST_LABEL} options={[20, 30]} selectedOption={1} id={TEST_ID} onChange={noop} />,
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the default RdsPaginationControl component with the proper label', () => {
    render(
      <RdsPaginationControl label={TEST_LABEL} options={[20, 30]} selectedOption={1} id={TEST_ID} onChange={noop} />,
    );
    expect(screen.getByText(TEST_LABEL)).toBeInTheDocument();
  });

  it('renders the RdsPaginationControl with the select button', () => {
    render(
      <RdsPaginationControl label={TEST_LABEL} options={[20, 30]} selectedOption={1} id={TEST_ID} onChange={noop} />,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
