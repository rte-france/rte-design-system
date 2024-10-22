/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { noop } from "@/shared/utils/defaultUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { render, screen } from "@testing-library/react";
import StdCollapseIcon from "../StdCollapseIcon";

describe("StdCollapseIcon", () => {
  it("renders the StdCollapseIcon component with isOpen to true", () => {
    render(<StdCollapseIcon onClick={noop} isOpen />);
    expect(screen.getByTitle(StdIconId.KeyboardArrowDown)).toBeDefined();
  });

  it("renders the StdCollapseIcon component with isOpen to false", () => {
    render(<StdCollapseIcon onClick={noop} isOpen={false} />);
    expect(screen.getByTitle(StdIconId.KeyboardArrowRight)).toBeDefined();
  });
});
