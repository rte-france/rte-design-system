/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import { RdsDropdownWithSearch } from '../RdsDropdownWithSearch.tsx';
import { noop } from '@/utils/index.ts';
import { generateFakeDropdownList } from '@/tests/mocks/dropdownItems.mock.ts';

const TEST_ID = 'my-dropdown';
const TEST_SEARCH_TEXT = 'research';

describe('RdsDropdownWithSearch', () => {
  it('renders search dropdown should display search bar', () => {
    render(
      <RdsDropdownWithSearch
        id={TEST_ID}
        items={generateFakeDropdownList(3)}
        mode="searchOnly"
        searchPlaceHolder={TEST_SEARCH_TEXT}
        onSearch={noop}
      />,
    );
    expect(screen.getByPlaceholderText(TEST_SEARCH_TEXT)).toBeInTheDocument();
  });
});
