/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";
import StdRenderLabel from "../StdRenderLabel";
const TEST_LABEL = "test";
describe("StdRenderLabel", () => {
  it("renders the default StdRenderLabel component", () => {
    render(<StdRenderLabel label={TEST_LABEL} />);
    const label = screen.getByText(TEST_LABEL);
    expect(label).toBeDefined();
  });
});
