/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { RdsCard } from '../RdsCard.tsx';

const onClick = vitest.fn();
const TEST_CHILDREN = <div role="article"></div>;
const TEST_ID = 'my-card';

describe('RdsCard', () => {
  it('renders the default RdsCard component', () => {
    render(<RdsCard id={TEST_ID} />);
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('renders the RdsCard component with children', () => {
    render(<RdsCard>{TEST_CHILDREN}</RdsCard>);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('renders the RdsCard component with onClick', async () => {
    render(<RdsCard onClick={onClick} />);
    const card = screen.getByRole('region');
    await userEvent.click(card);
    expect(onClick).toBeCalled();
  });
});
