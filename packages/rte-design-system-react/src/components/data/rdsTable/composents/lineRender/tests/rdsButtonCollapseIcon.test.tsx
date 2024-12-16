/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';
import { RdsButtonCollapseIcon } from '../RdsButtonCollapseIcon.tsx';
import { noop, RdsIconId } from '@/utils/index.ts';

describe('RdsButtonCollapseIcon', () => {
  it('renders the RdsButtonCollapseIcon component with isOpen to true', async () => {
    render(<RdsButtonCollapseIcon onClick={noop} isOpen />);
    await waitFor(() => expect(screen.getByTitle(RdsIconId.KeyboardArrowDown)).toBeInTheDocument());
  });

  it('renders the RdsButtonCollapseIcon component with isOpen to false', async () => {
    render(<RdsButtonCollapseIcon onClick={noop} isOpen={false} />);
    await waitFor(() => expect(screen.getByTitle(RdsIconId.KeyboardArrowRight)).toBeInTheDocument());
  });
});
