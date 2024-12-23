/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { RdsHeading } from '../RdsHeading.tsx';

const TEST_TITLE = 'My section title';

describe('RdsHeading', () => {
  it('renders RdsHeading component', () => {
    render(<RdsHeading title={TEST_TITLE} />);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(TEST_TITLE);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
