/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { generateFixedFullNames, generateFullName } from '@/mocks/data/back/user.mocks';
import StdAvatarGroup from '../StdAvatarGroup';

const TEST_NAME_UNIQUE = [generateFullName(1)];
const TEST_NAME_MULTIPLE = generateFixedFullNames(5);
const TEST_SIZE = 'm';

describe('StdAvatarGroup', () => {
  it('renders StdAvatarGroup component with unique user', () => {
    render(<StdAvatarGroup names={TEST_NAME_UNIQUE} avatarSize={TEST_SIZE} />);

    expect(screen.getAllByRole('figure').length == 1);
  });
});

describe('StdAvatarGroup', () => {
  it('renders StdAvatarGroup component with multiple user', () => {
    render(<StdAvatarGroup names={TEST_NAME_MULTIPLE} avatarSize={TEST_SIZE} />);

    expect(screen.getAllByRole('figure').length == 3);
  });
});
