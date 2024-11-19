/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIcon } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';

export const RdsBreadcrumbSeparator = () => (
  <div className="rds-h-2.5 rds-w-2.5 rds-self-center">
    <RdsIcon name={RdsIconId.KeyboardArrowRight} color="gray-600" />
  </div>
);
