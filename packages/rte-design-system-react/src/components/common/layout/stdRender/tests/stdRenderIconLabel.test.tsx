/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { render, screen } from "@testing-library/react";
import StdRenderIconLabel from "../StdRenderIconLabel";
const TEST_LABEL = "test";

describe("StdRenderIconLabel", () => {
  it("renders the default StdRenderIconLabel component", () => {
    render(<StdRenderIconLabel icon={StdIconId.Add} label={TEST_LABEL} />);
    const label = screen.getByText(TEST_LABEL);
    expect(label).toBeDefined();
    const icon = screen.getByTitle(StdIconId.Add);
    expect(icon).toBeDefined();
  });
});
