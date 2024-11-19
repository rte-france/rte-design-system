/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';

import { RdsBadge } from '../rdsBadge.tsx';
import { randomMinMax, randomNumber } from '@/tests/mocks/mockTools.ts';

const TEST_CHILDREN = <div />;
const TEST_NOTIF_LESS_100 = randomNumber(99);
const TEST_NOTIF_MORE_THAN_99 = randomMinMax(100, 1000);

describe('RdsBadge', () => {
  it('renders RdsBadge component', () => {
    render(<RdsBadge>{TEST_CHILDREN}</RdsBadge>);
    expect(screen.getByRole('note')).toBeInTheDocument();
  });
  it('display the exact number of notifications', () => {
    render(<RdsBadge badgeValue={TEST_NOTIF_LESS_100}>{TEST_CHILDREN}</RdsBadge>);
    expect(screen.getByRole('note').innerHTML).toBe(TEST_NOTIF_LESS_100.toString());
  });
  it('display +99 in every cases', () => {
    render(<RdsBadge badgeValue={TEST_NOTIF_MORE_THAN_99}>{TEST_CHILDREN}</RdsBadge>);
    expect(screen.getByRole('note').innerHTML).toBe('+99');
  });
});
