/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsChipToggle } from "rte-design-system-react";

export const RdsChipToggleDemo = () => {
  return (
    <RdsChipToggle
      value="RdsChipoogle"
      onChange={(checked, value) => console.log(`checked:${checked} || value:${value}`)}
    />
  );
};
