/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from '@testing-library/react';
import { RdsDropdown } from '../RdsDropdown.tsx';
import { generateFakeDropdownList } from '@/tests/mocks/dropdownItems.mock.ts';
import RdsDropdownWithHeader from '../RdsDropdownWithHeader.tsx';

const TEST_HEADER = 'This is a dropdown header yay!';
const TEST_ID = 'my-dropdown';

describe('RdsDropdown', () => {
  it('properly renders the RdsDropdown with the proper id', () => {
    render(<RdsDropdown id={TEST_ID} items={generateFakeDropdownList(3)} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeInTheDocument();
  });

  it('properly renders the items section', () => {
    render(<RdsDropdown id={TEST_ID} items={generateFakeDropdownList(3)} />);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('properly renders the header section when header is passed', () => {
    render(<RdsDropdownWithHeader id={TEST_ID} items={generateFakeDropdownList(3)} header={TEST_HEADER} />);
    expect(screen.getByText(TEST_HEADER)).toBeInTheDocument();
  });

  it('properly gives the container the combobox role if dropdown is multiple', () => {
    render(<RdsDropdown id={TEST_ID} items={generateFakeDropdownList(3)} isMultiple />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders the correct amount of items in the item section with the proper content', () => {
    const list = generateFakeDropdownList(3);
    render(<RdsDropdown id={TEST_ID} items={list} />);
    expect(screen.getAllByRole('option').length).toBe(list.length);
    expect(document.querySelector(`#${list[0].id}`)).toBeInTheDocument();
    expect(screen.getByText(list[0].label)).toBeInTheDocument();
  });
});
