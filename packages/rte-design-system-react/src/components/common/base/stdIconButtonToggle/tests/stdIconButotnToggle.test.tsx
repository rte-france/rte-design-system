/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { IconToggle } from "@/shared/types/IconToggle.type";
import { noop } from "@/shared/utils/defaultUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { render, screen } from "@testing-library/react";
import StdIconButtonToggle from "../StdIconButtonToggle";

const TEST_ICONS = [StdIconId.Add, StdIconId.Delete] as IconToggle;

describe("StdIconButtonToggle", () => {
  it("render the component with the unfilled icon", () => {
    render(<StdIconButtonToggle icons={TEST_ICONS} onClick={noop} />);

    expect(screen.getByTitle(TEST_ICONS[0])).toBeDefined();
  });
  it("render the component with the filled icon", () => {
    render(<StdIconButtonToggle icons={TEST_ICONS} onClick={noop} active />);

    expect(screen.getByTitle(TEST_ICONS[1])).toBeDefined();
  });
});
