/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { screen } from "@testing-library/react";

import { RenderWrapper } from "@/shared/test/testUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import StdLinkIconButton from "../StdLinkIconButton";

const TEST_ICON = StdIconId.Add;
const TEST_ID = "my-link";
const TEST_HREF_EXTERNAL = "https://www.rte-france.com/";
const TEST_HREF_INTERNAL = "/test-route";

describe("StdLinkIconButton", () => {
  it("renders the default StdLinkIconButton component with icon", () => {
    RenderWrapper.create(
      <StdLinkIconButton
        icon={TEST_ICON}
        href={TEST_HREF_EXTERNAL}
        location="external"
      />
    )
      .withRouter()
      .render();
    expect(screen.getByRole("link")).toBeDefined();
    expect(screen.getByTitle(TEST_ICON)).toBeDefined();
  });

  it("renders the StdLinkIconButton component with the proper id when specified", () => {
    RenderWrapper.create(
      <StdLinkIconButton
        id={TEST_ID}
        icon={TEST_ICON}
        href={TEST_HREF_EXTERNAL}
        location="external"
      />
    )
      .withRouter()
      .render();
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("renders the StdLinkIconButton component with the expected internal route value", () => {
    RenderWrapper.create(
      <StdLinkIconButton
        icon={TEST_ICON}
        href={TEST_HREF_INTERNAL}
        location="internal"
      />
    )
      .withRouter()
      .render();
    const link = screen.getByRole("link");
    expect(link).toBeDefined();
    expect(screen.getByRole("link").getAttribute("href")).toBe(
      TEST_HREF_INTERNAL
    );
  });
});
