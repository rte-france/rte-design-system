/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";
import StdRenderCheckbox from "../StdRenderCheckbox";

describe("StdRenderCheckbox", () => {
  it("renders the default StdRenderCheckbox component", () => {
    render(<StdRenderCheckbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDefined();
  });
});
