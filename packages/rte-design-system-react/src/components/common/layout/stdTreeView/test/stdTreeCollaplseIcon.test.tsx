/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";
import StdTreeCollaplseIcon from "../StdTreeCollaplseIcon";
import { TreeCollapseIcon } from "../TreeType";

describe("StdTreeCollaplseIcon", () => {
  it("renders the default StdTreeCollaplseIcon component", () => {
    render(
      <StdTreeCollaplseIcon
        onClick={() => {}}
        iconType={TreeCollapseIcon.Collapse}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
  });

  it("renders the default StdTreeCollaplseIcon component", () => {
    render(
      <StdTreeCollaplseIcon
        onClick={() => {}}
        iconType={TreeCollapseIcon.Expand}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
  });
});
