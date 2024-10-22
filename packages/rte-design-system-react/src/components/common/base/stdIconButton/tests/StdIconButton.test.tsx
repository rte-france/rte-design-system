/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";

import { noop } from "@/shared/utils/defaultUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import StdIconButton from "../StdIconButton";

const TEST_ICON = StdIconId.Add;
const TEST_ID = "my-button";

describe("StdIconButton", () => {
  it("renders the default StdIconButton component with icon", () => {
    render(<StdIconButton icon={TEST_ICON} onClick={noop} />);
    expect(screen.getByRole("button")).toBeDefined();
    expect(screen.getByTitle(TEST_ICON)).toBeDefined();
  });

  it("renders the StdIconButton with the proper id when specified", () => {
    render(<StdIconButton id={TEST_ID} icon={TEST_ICON} onClick={noop} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });
});
