/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { NO_PREFIX } from '@/types/TailwindColorClass.type.ts';
import { ItemStyleConfig } from '../navbar.type.tsx';
import { renderWithRouter } from '@/tests/testUtils.tsx';
import RdsNavbarMenuItem from '../RdsNavbarMenuItem.tsx';
import { screen, waitFor } from '@testing-library/react';
import { menuTopData } from '@/tests/mocks/menuData.mock.ts';

const DEFAULT_CONFIG = {
  itemBackground: {
    [NO_PREFIX]: 'gray-50',
    hover: 'gray-200',
    active: 'gray-300',
    selected: 'gray-300',
  },
  itemContent: {
    [NO_PREFIX]: 'gray-700',
    hover: 'gray-900',
    active: 'gray-900',
    selected: 'gray-900',
  },
} as { itemBackground: ItemStyleConfig; itemContent: ItemStyleConfig };

const menuItemSample = menuTopData[0]!;

describe('RdsNavbarMenuItem component', () => {
  it('should render the component with the default behavior and proper id', async () => {
    renderWithRouter(<RdsNavbarMenuItem item={menuItemSample} itemsStyleConfig={DEFAULT_CONFIG} />);
    expect(document.querySelector(`#${menuItemSample.id}`)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByTitle(menuItemSample.icon)).toBeInTheDocument());
  });
  it('should render the item label if expanded is true', () => {
    renderWithRouter(<RdsNavbarMenuItem item={menuItemSample} expanded itemsStyleConfig={DEFAULT_CONFIG} />);
    expect(screen.getByText(menuItemSample.label)).toBeInTheDocument();
  });
  it('should not render the item label if expanded is not true', () => {
    renderWithRouter(<RdsNavbarMenuItem item={menuItemSample} expanded={false} itemsStyleConfig={DEFAULT_CONFIG} />);
    expect(screen.queryByText(menuItemSample.label)).not.toBeInTheDocument();
  });
});
