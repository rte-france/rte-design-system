/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsDivider } from '../../rdsDivider/RdsDivider.tsx';

const HEADER_CLASSES = 'rds-p-1 rds-text-body-xs rds-min-w-5 rds-max-w-fit';

export const RdsDropdownHeader = ({ header }: { header: string }) => (
  <>
    <div className={HEADER_CLASSES}>
      <span className="line-clamp-2">{header}</span>
    </div>
    <RdsDivider />
  </>
);
