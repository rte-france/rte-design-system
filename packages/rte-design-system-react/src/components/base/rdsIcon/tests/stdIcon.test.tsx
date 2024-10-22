/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { RdsIcon } from '../RdsIcon';
import { RdsIconId } from '@/shared/utils/mappings/iconMaps';

const TEST_ICON = RdsIconId.Add;

describe('RdsIcon', () => {
  it('renders RdsIcon component', () => {
    render(<RdsIcon name={TEST_ICON} />);
    expect(screen.getByTitle(TEST_ICON)).toBeInTheDocument();
  });
});
