/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useMemo, useState } from 'react';
import { RdsDropdown, RdsDropdownProps } from './RdsDropdown.tsx';
import RdsDropdownSearchHeader from './subComponents/RdsDropdownSearchHeader.tsx';
import { RdsEmptySearch } from './subComponents/RdsEmptySearch.tsx';
import { RdsDropdownAddFooter } from './subComponents/RdsDropdownAddFooter.tsx';

type SearchOnlyType = {
  mode: 'searchOnly';
  searchPlaceHolder: string;
};

type SearchAddNewType = {
  mode: 'addNew';
  searchPlaceHolder: string;
};
export type RdsDropdownWithHeaderProps = { onSearch: () => void } & (SearchOnlyType | SearchAddNewType) &
  Omit<RdsDropdownProps, 'header' | 'footer'>;

export const DROPDOWN_SEARCH_BAR = 'dropdown-search-bar';

export const RdsDropdownWithSearch = ({
  mode,
  searchPlaceHolder,
  items,
  onSearch,
  ...dropdownProps
}: RdsDropdownWithHeaderProps) => {
  const [searchInput, setSearchInput] = useState<string>();
  const itemsfiltered = useMemo(
    () =>
      !searchInput
        ? items
        : items.filter((item) => !searchInput || item.label.toLowerCase().includes(searchInput.toLowerCase())),
    [items, searchInput],
  );

  return (
    <>
      <RdsDropdown
        {...dropdownProps}
        items={itemsfiltered}
        header={
          <RdsDropdownSearchHeader
            onChange={setSearchInput}
            onSearch={onSearch}
            value={searchInput}
            placeHolder={searchPlaceHolder}
            id={DROPDOWN_SEARCH_BAR}
          />
        }
        emptyDropdownItem={<RdsEmptySearch />}
        footer={mode === 'addNew' ? <RdsDropdownAddFooter /> : undefined}
      />
    </>
  );
};
