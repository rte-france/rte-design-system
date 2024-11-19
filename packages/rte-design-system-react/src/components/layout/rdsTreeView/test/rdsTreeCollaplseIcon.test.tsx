/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import { RdsTreeCollaplseIcon } from '../RdsTreeCollaplseIcon.tsx';
import { TreeCollapseIcon } from '../TreeType.ts';

describe('RdsTreeCollaplseIcon', () => {
  it('renders the default RdsTreeCollaplseIcon component', () => {
    render(<RdsTreeCollaplseIcon onClick={() => {}} iconType={TreeCollapseIcon.Collapse} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders the default RdsTreeCollaplseIcon component', () => {
    render(<RdsTreeCollaplseIcon onClick={() => {}} iconType={TreeCollapseIcon.Expand} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
