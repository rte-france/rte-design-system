/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconToggle, noop, RdsIconId } from '@/utils/index.ts';
import { render, screen, waitFor } from '@testing-library/react';
import { RdsIconButtonToggle } from '../RdsIconButtonToggle.tsx';

const TEST_ICONS = [RdsIconId.Add, RdsIconId.Delete] as IconToggle;

describe('RdsIconButtonToggle', () => {
  it('render the component with the unfilled icon', async () => {
    render(<RdsIconButtonToggle icons={TEST_ICONS} onClick={noop} />);

    waitFor(() => expect(screen.getByTitle(TEST_ICONS[0])).toBeDefined());
  });
  it('render the component with the filled icon', async () => {
    render(<RdsIconButtonToggle icons={TEST_ICONS} onClick={noop} active />);

    waitFor(() => expect(screen.getByTitle(TEST_ICONS[1])).toBeDefined());
  });
});
