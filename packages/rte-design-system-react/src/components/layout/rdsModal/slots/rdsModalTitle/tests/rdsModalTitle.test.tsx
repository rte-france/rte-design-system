/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';

import { RdsModalTitle } from '../RdsModalTitle.tsx';
import { RdsIconId } from '@/utils/index.ts';

const onClose = vitest.fn();
const TEST_CHILDREN = <div role="article"></div>;
const TEST_ICON = RdsIconId.Warning;

describe('RdsModalTitle', () => {
  it('render the default RdsModalTitle', () => {
    render(<RdsModalTitle onClose={onClose}>{TEST_CHILDREN}</RdsModalTitle>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('render the RdsModalTitle with icon', async () => {
    render(
      <RdsModalTitle onClose={onClose} icon={TEST_ICON}>
        {TEST_CHILDREN}
      </RdsModalTitle>,
    );
    await waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });
});
