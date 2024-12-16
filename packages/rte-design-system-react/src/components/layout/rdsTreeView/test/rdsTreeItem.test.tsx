/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render } from '@testing-library/react';
import { RdsTreeItem } from '../RdsTreeItem.tsx';
import { oneItemTree, smallTree } from './renderDataUtils.ts';

describe('RdsTreeItem', () => {
  it('renders the default RdsTreeItem component', () => {
    const renderItem = vi.fn();
    render(<RdsTreeItem tree={oneItemTree} itemRender={renderItem} />);
    expect(renderItem).toBeCalled();
  });

  it('default Open should expand first item', () => {
    const renderItem = vi.fn();
    render(<RdsTreeItem tree={smallTree} itemRender={renderItem} defaultOpen />);
    expect(renderItem).toBeCalledTimes(2);
  });
  it('default close (defaultOpen false) should collapse first item', () => {
    const renderItem = vi.fn();
    render(<RdsTreeItem tree={smallTree} itemRender={renderItem} defaultOpen={false} />);
    expect(renderItem).toBeCalledTimes(1);
  });

  it('default close (defaultOpen false) should collapse first item', () => {
    const renderItem = vi.fn();
    render(<RdsTreeItem tree={smallTree} itemRender={renderItem} defaultOpen={false} />);
    expect(renderItem).toBeCalledTimes(1);
  });
});
