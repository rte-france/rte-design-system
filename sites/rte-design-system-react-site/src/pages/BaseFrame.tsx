/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Link } from "react-router-dom";
import { RdsButtonDemo } from "../components/base/rdsButton/RdsButton";
import { RdsButtonGroupDemo } from "../components/base/rdsButtonGroup/RdsButtonGroup";
import { RdsChipDemo } from "../components/base/rdsChip/RdsChip";
import { RdsChipToggleDemo } from "../components/base/rdsChipToggle/RdsChipToggle";
import { RdsIconDemo } from "../components/base/rdsIcon/RdsIcon";
import { RdsIconButtonDemo } from "../components/base/rdsIconButton/RdsIconButton";
import { RdsIconButtonToggleDemo } from "../components/base/rdsIconButtonToggle/RdsIconButtonToggle";
import { RdsLinkButtonDemo } from "../components/base/rdsLinkButton/RdsLinkButton";
import { RdsLinkIconButtonDemo } from "../components/base/rdsLinkIconButton/RdsLinkIconButton";
import { RdsTagDemo } from "../components/base/rdsTag/RdsTag";
import { RdsTagListDemo } from "../components/base/rdsTagList/RdsTagList";
import { RdsToggleDemo } from "../components/base/rdsToggle/RdsToggle";

const arrComponents = [
  RdsTagDemo,
  RdsChipDemo,
  RdsButtonDemo,
  RdsIconDemo,
  RdsToggleDemo,
  RdsTagListDemo,
  RdsChipToggleDemo,
  RdsIconButtonDemo,
  RdsLinkButtonDemo,
  RdsButtonGroupDemo,
  RdsLinkIconButtonDemo,
  RdsIconButtonToggleDemo,
];
export const BaseFrame = () => {
  return (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {arrComponents.map((Component, index) => (
        <div key={index} style={{ height: "20vh", width: "20vw", border: "solid" }}>
          <Component />
        </div>
      ))}
    </div>
  );
};

export default BaseFrame;
