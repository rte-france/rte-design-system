/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsSearchInput, RdsSearchInputProps } from '@/components/forms/rdsSearchInput/RdsSearchInput.tsx';
import { RdsDivider } from '../../rdsDivider/RdsDivider.tsx';

const HEADER_CLASSES = 'rds-p-1 rds-text-body-xs rds-min-w-5 rds-max-w-fit';
export const DROPDOWN_SEARCH_ID = 'rds-dropdown-header-search-id';

const RdsDropdownSearchHeader = (searchProps: RdsSearchInputProps) => (
  <>
    <div className={HEADER_CLASSES}>
      <RdsSearchInput id={DROPDOWN_SEARCH_ID} size="small" {...searchProps} />
    </div>
    <RdsDivider />
  </>
);
export default RdsDropdownSearchHeader;
