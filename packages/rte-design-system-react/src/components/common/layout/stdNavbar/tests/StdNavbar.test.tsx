/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { fakeHomeLink } from "@/mocks/data/components/navbarHeader";
import {
  menuBottomData,
  menuTopData,
} from "@/mocks/data/features/menuData.mock";
import { renderWithRouter } from "@/shared/test/testUtils";
import { screen } from "@testing-library/react";
import StdNavbar, { NavbarConfig } from "../StdNavbar";

const DEFAULT_NAVBAR_TEXT_CONFIG: NavbarConfig = {
  header: {
    appName: "App. RTE",
    appVersion: "v1.0",
    appTwoLetters: "AR",
    variant: "text",
    versionTextColor: "gray-600",
    headerLink: "/",
    headerId: "imagrid-navbar-header",
  },
  itemContent: {
    main: "gray-800",
    hover: "gray-900",
    active: "gray-900",
    selected: "gray-900",
  },
  itemBackground: {
    main: "gray-50",
    hover: "gray-300",
    active: "gray-400",
    selected: "gray-400",
  },
  separatorColor: "gray-700",
  textColor: "gray-800",
};

const TEST_ID = "navbar";
const TOTAL_LENGTH = menuTopData.length + menuBottomData.length + 1; // Add one for the Header link

describe("StdNavbar component", () => {
  it("should render the navbar component with proper role and id, with the correct amount of sub items", () => {
    renderWithRouter(
      <StdNavbar
        headerLink={fakeHomeLink}
        topItems={menuTopData}
        bottomItems={menuBottomData}
        config={DEFAULT_NAVBAR_TEXT_CONFIG}
        id={TEST_ID}
      />
    );
    expect(screen.getByRole("navigation")).toBeDefined();
    expect(document.querySelector(`#${TEST_ID}`));
    expect(screen.getAllByRole("link").length).toBe(TOTAL_LENGTH);
  });
});
