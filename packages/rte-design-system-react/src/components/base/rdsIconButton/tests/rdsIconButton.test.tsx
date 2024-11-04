/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { noop, RdsIconId } from '@/shared/index.ts';
import { RdsIconButton } from '../RdsIconButton.tsx';

const TEST_ICON = RdsIconId.Add;
const TEST_ID = 'my-button';

describe('RdsIconButton', () => {
  it('renders the default RdsIconButton component with icon', () => {
    render(<RdsIconButton icon={TEST_ICON} onClick={noop} />);
    expect(screen.getByRole('button')).toBeDefined();
    expect(screen.getByTitle(TEST_ICON)).toBeDefined();
  });

  it('renders the RdsIconButton with the proper id when specified', () => {
    render(<RdsIconButton id={TEST_ID} icon={TEST_ICON} onClick={noop} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });
});
