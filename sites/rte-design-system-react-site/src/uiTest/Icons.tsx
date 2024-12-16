/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIcon, RdsIconId } from "rte-design-system-react";

export const Icons = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "100px 100px 100px 100px", gap: "2rem" }}>
      {Object.values(RdsIconId).map((icon) => (
        <div style={{ flex: "1 1 auto", border: "solid" }}>
          <p>{icon}</p>
          <div style={{ height: "24px", width: "24px", margin: "1px" }}>
            <RdsIcon width={24} height={24} name={icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Icons;
