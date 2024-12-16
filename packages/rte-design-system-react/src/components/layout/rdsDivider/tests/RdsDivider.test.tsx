/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { RdsDivider } from '../RdsDivider.tsx';

describe('RdsDivider', () => {
  it('renders RdsDivider component', () => {
    render(<RdsDivider />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });
});
