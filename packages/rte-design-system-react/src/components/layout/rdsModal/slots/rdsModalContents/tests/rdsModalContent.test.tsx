/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import { RdsModalContent } from '../RdsModalContent.tsx';

const CHILD_TEST = <div role="article"></div>;

describe('RdsModalContent', () => {
  it('render the components and its children', () => {
    render(<RdsModalContent>{CHILD_TEST}</RdsModalContent>);
    const child = screen.getByRole('article');
    expect(child).toBeInTheDocument();
  });
});
