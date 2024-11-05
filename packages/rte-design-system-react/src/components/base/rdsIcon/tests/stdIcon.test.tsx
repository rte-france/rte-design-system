/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen, waitFor } from '@testing-library/react';

import { RdsIcon } from '../RdsIcon.tsx';
import { RdsIconId } from '@/utils/mappings/iconMaps.ts';

const TEST_ICON = RdsIconId.Add;

describe('RdsIcon', () => {
  it('renders RdsIcon component', async () => {
    render(<RdsIcon name={TEST_ICON} />);
    waitFor(() => expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument());
  });
});
