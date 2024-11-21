/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { screen } from '@testing-library/react';
import { RdsNavbar } from '../RdsNavbar.tsx';
import { NavbarConfig } from '../navbar.type.tsx';
import { NO_PREFIX } from '@/types/TailwindColorClass.type.ts';
import { menuBottomData, menuTopData } from '@/tests/mocks/menuData.mock.ts';
import { renderWithRouter } from '@/tests/testUtils.tsx';

const DEFAULT_NAVBAR_TEXT_CONFIG: NavbarConfig = {
  header: {
    appName: 'App. RTE',
    appVersion: 'v1.0',
    appTwoLetters: 'AR',
    variant: 'text',
    versionTextColor: 'gray-600',
    headerLink: '/',
    headerId: 'imagrid-navbar-header',
  },
  itemContent: {
    [NO_PREFIX]: 'gray-800',
    hover: 'gray-900',
    active: 'gray-900',
    'aria-selected': 'gray-900',
  },
  itemBackground: {
    [NO_PREFIX]: 'gray-50',
    hover: 'gray-300',
    active: 'gray-400',
    'aria-selected': 'gray-400',
  },
  separatorColor: 'gray-700',
  textColor: 'gray-800',
};

const TEST_ID = 'navbar';
const TOTAL_LENGTH = menuTopData.length + menuBottomData.length + 1; // Add one for the Header link
const fakeHomeLink = '/';

describe('RdsNavbar component', () => {
  it('should render the navbar component with proper role and id, with the correct amount of sub items', () => {
    renderWithRouter(
      <RdsNavbar
        headerLink={fakeHomeLink}
        topItems={menuTopData}
        bottomItems={menuBottomData}
        config={DEFAULT_NAVBAR_TEXT_CONFIG}
        id={TEST_ID}
      />,
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(document.querySelector(`#${TEST_ID}`));
    expect(screen.getAllByRole('link').length).toBe(TOTAL_LENGTH);
  });
});
