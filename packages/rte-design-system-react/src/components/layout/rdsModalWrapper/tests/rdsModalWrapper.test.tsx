/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import { RdsModalWrapper } from '../RdsModalWrapper.tsx';

const TEST_CHILDREN = <div role="article">Content</div>;

describe('RdsModalWrapper', () => {
  it('render the stdModalWrapper component', () => {
    render(<RdsModalWrapper>{TEST_CHILDREN}</RdsModalWrapper>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
