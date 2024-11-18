/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { RdsPaginationButton } from '../RdsPaginationButton.tsx';
import { noop } from '@/utils/index.ts';

const TEST_ID = 'my-button';

describe('RdsPaginationButton', () => {
  it('renders the default RdsPaginationButton component', () => {
    render(<RdsPaginationButton value={1} onClick={noop} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders the RdsPaginationButton with the proper id when specified', () => {
    render(<RdsPaginationButton id={TEST_ID} value={1} onClick={noop} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });
});
