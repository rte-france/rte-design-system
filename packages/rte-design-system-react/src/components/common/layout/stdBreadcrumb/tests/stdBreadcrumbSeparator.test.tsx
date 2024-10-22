/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { render, screen } from "@testing-library/react";
import StdBreadcrumbSeparator from "../StdBreadcrumbSeparator";

const SEPARATOR_ICON = StdIconId.KeyboardArrowRight;

describe("StdBreadcrumbSeparator", () => {
  it("renders StdIcon component", () => {
    render(<StdBreadcrumbSeparator />);
    expect(screen.getByTitle(SEPARATOR_ICON)).toBeDefined();
  });
});
