/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsDropdown, RdsDropdownProps } from './RdsDropdown.tsx';
import { RdsDropdownHeader } from './subComponents/RdsDropdownHeader.tsx';

type RdsDropdownWithHeaderProps = RdsDropdownProps & { header: string };

const RdsDropdownWithHeader = ({ header, ...dropdownProps }: RdsDropdownWithHeaderProps) => (
  <>
    <RdsDropdown {...dropdownProps} header={<RdsDropdownHeader header={header} />} />
  </>
);

export default RdsDropdownWithHeader;
