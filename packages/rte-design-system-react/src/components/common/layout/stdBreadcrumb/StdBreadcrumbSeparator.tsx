/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdIcon from '@common/base/stdIcon/StdIcon';

const StdBreadcrumbSeparator = () => (
  <div className="h-2.5 w-2.5 self-center">
    <StdIcon name={StdIconId.KeyboardArrowRight} color="gray-600" />
  </div>
);

export default StdBreadcrumbSeparator;
