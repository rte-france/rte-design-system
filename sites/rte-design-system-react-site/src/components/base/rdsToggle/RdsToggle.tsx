/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsToggle } from "rte-design-system-react";

export const RdsToggleDemo = () => {
  return (
    <RdsToggle
      items={[
        { content: "Option 1", value: "1" },
        { content: "Option 2", value: "2" },
      ]}
      name="toggle"
    />
  );
};
