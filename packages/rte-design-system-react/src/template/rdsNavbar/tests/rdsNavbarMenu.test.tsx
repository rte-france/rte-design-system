/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { screen, waitFor } from '@testing-library/react';
import { RdsNavbarMenu } from '../RdsNavbarMenu.tsx';
import { renderWithRouter } from '@/tests/testUtils.tsx';
import { menuTopData } from '@/tests/mocks/menuData.mock.ts';

describe('RdsNavbarMenu component', () => {
  it('should render the component with the proper amount of items', async () => {
    renderWithRouter(<RdsNavbarMenu menuItems={menuTopData} />);
    expect(screen.getAllByRole('link').length).toBe(menuTopData.length);
    for (const item of menuTopData) {
      await waitFor(() => expect(screen.getByTitle(item.icon)).toBeInTheDocument());
    }
  });
  it('should display the labels when expanded is true', () => {
    renderWithRouter(<RdsNavbarMenu menuItems={menuTopData} expanded />);
    for (const item of menuTopData) {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    }
  });
});
