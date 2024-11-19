/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render } from '@testing-library/react';
import { RdsTreeView } from '../RdsTreeView.tsx';
import { largeTree, oneItemTree, smallTree } from './renderDataUtils.ts';

const TEST_ID = 'testId';
describe('RdsTreeView', () => {
  it('renders the default RdsTreeView component', () => {
    const renderItem = vi.fn();
    render(<RdsTreeView tree={oneItemTree} itemRender={renderItem} id={TEST_ID} />);
    expect(renderItem).toBeCalled();
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('tree should expand root item', () => {
    const renderItem = vi.fn();
    render(<RdsTreeView tree={smallTree} itemRender={renderItem} defaultOpen />);
    expect(renderItem).toBeCalledTimes(2);
  });

  it('tree should expand only root item', () => {
    const renderItem = vi.fn();
    render(<RdsTreeView tree={largeTree} itemRender={renderItem} />);
    expect(renderItem).toBeCalledTimes(4);
  });
});
