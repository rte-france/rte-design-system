/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { screen } from "@testing-library/react";

import { RenderWrapper } from "@/shared/test/testUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import StdLinkButton from "../StdLinkButton";

const TEST_LABEL = "Label";
const TEST_ICON = StdIconId.Add;
const TEST_ID = "my-link";
const TEST_HREF_EXTERNAL = "https://www.rte-france.com/";
const TEST_HREF_INTERNAL = "/test-route";

describe("StdLinkButton", () => {
  it("renders the default StdLinkButton component", () => {
    RenderWrapper.create(
      <StdLinkButton
        label={TEST_LABEL}
        href={TEST_HREF_EXTERNAL}
        location="external"
      />
    )
      .withRouter()
      .render();
    const link = screen.getByRole("link");
    expect(link).toBeDefined();
    expect(link.textContent).toBe(TEST_LABEL);
  });

  it("renders the StdLinkButton with the proper id when specified", () => {
    RenderWrapper.create(
      <StdLinkButton
        label={TEST_LABEL}
        id={TEST_ID}
        href={TEST_HREF_EXTERNAL}
        location="external"
      />
    )
      .withRouter()
      .render();
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("renders the StdLinkButton component with icon + label", () => {
    RenderWrapper.create(
      <StdLinkButton
        label={TEST_LABEL}
        icon={TEST_ICON}
        href={TEST_HREF_EXTERNAL}
        location="external"
      />
    )
      .withRouter()
      .render();
    const link = screen.getByRole("link");
    expect(link).toBeDefined();
    expect(link.textContent).toContain(TEST_LABEL);
    expect(screen.getByTitle(TEST_ICON)).toBeDefined();
  });

  it("renders the StdLinkButton component with icon and no label", () => {
    RenderWrapper.create(
      <StdLinkButton
        icon={TEST_ICON}
        href={TEST_HREF_EXTERNAL}
        location="external"
      />
    )
      .withRouter()
      .render();
    const link = screen.getByRole("link");
    expect(link).toBeDefined();
    expect(screen.getByTitle(TEST_ICON)).toBeDefined();
  });

  it("renders the StdLinkButton component with the expected href attribute", () => {
    RenderWrapper.create(
      <StdLinkButton
        icon={TEST_ICON}
        href={TEST_HREF_EXTERNAL}
        location="external"
      />
    )
      .withRouter()
      .render();
    const link = screen.getByRole("link");
    expect(link).toBeDefined();
    expect(screen.getByRole("link").getAttribute("href")).toBe(
      TEST_HREF_EXTERNAL
    );
  });

  it("renders the StdLinkButton component with the expected href attribute", () => {
    RenderWrapper.create(
      <StdLinkButton
        icon={TEST_ICON}
        href={TEST_HREF_EXTERNAL}
        location="external"
      />
    )
      .withRouter()
      .render();
    const link = screen.getByRole("link");
    expect(link).toBeDefined();
    expect(screen.getByRole("link").getAttribute("href")).toBe(
      TEST_HREF_EXTERNAL
    );
  });

  it("renders the StdLinkButton component with the expected internal route value", () => {
    RenderWrapper.create(
      <StdLinkButton
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
