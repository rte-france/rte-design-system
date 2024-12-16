/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useState } from "react";
import {
  RdsButton,
  RdsButtonGroup,
  RdsChip,
  RdsChipToggle,
  RdsIconButtonToggle,
  RdsIconId,
  RdsLinkButton,
  RdsLinkIconButton,
  RdsTag,
  RdsTagList,
  RdsToggle,
} from "rte-design-system-react";

export const Bases = () => {
  const [toogle, setToogle] = useState(false);
  console.log("🚀 QCA :  ~ Bases ~ toogle:", toogle);
  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>RdsButtons</span>
        <RdsButton label="Button" />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>RdsButtonsGroup</span>
        <RdsButtonGroup label="test" />
        <RdsButtonGroup label="test2" />
        <RdsButtonGroup label="test3" />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>RdsChip</span>
        <RdsChip label="chip" />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>RdsChipToggle</span>
        <RdsChipToggle value="Chip" label="ChipToggle" checked={toogle} onChange={() => setToogle((b) => !b)} />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>RdsIconButtonToggle</span>
        <RdsIconButtonToggle
          onClick={() => {
            console.log("click RdsIconButton");
            setToogle((b) => !b);
          }}
          active={toogle}
          icons={[RdsIconId.ArrowBack, RdsIconId.ArrowUpward]}
        />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>RdsTag</span>
        <RdsTag label="ChipToggle" />
      </div>
      <div style={{ display: "flex", gap: "2rem", width: "150px" }}>
        <span>RdsTag List</span>
        <RdsTagList tags={["tag1", "tag2", "tag3"]} />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>Rds toggle</span>
        <RdsToggle
          name="toggle"
          items={[
            {
              content: "test",
            },
            {
              content: "test2",
            },
          ]}
        />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>RdsLinkButton</span>
        <RdsLinkButton href="test" location="external" label="label" />
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <span>RdsLinkIcon</span>
        <RdsLinkIconButton href="test" location="external" icon={RdsIconId.Link} />
      </div>
    </>
  );
};

export default Bases;
