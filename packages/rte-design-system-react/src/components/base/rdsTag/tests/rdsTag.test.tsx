/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { noop, RdsIconId } from '@/utils/index.ts';
import { RdsTag } from '../RdsTag.tsx';

const TEST_LABEL = 'label';
const TEST_ID = 'my-tag';
const TEST_ICON = RdsIconId.Close;

describe('RdsTag', () => {
  it('renders the default RdsTag component with the expected id', () => {
    render(<RdsTag label={TEST_LABEL} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the default RdsTag component with the close button', async () => {
    render(<RdsTag label={TEST_LABEL} id={TEST_ID} onDelete={noop} />);
    waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });
});
