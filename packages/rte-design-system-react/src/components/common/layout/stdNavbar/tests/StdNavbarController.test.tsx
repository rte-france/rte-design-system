/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { noop } from "@/shared/utils/defaultUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { render, screen } from "@testing-library/react";
import { ItemStyleConfig } from "../StdNavbar";
import StdNavbarController from "../StdNavbarController";

const TEST_LABEL = "Controls";
const TEST_ID = "navbar-controller-id";

const DEFAULT_CONFIG = {
  itemBackground: {
    main: "gray-50",
    hover: "gray-200",
    active: "gray-300",
    selected: "gray-300",
  },
  itemContent: {
    main: "gray-700",
    hover: "gray-900",
    active: "gray-900",
    selected: "gray-900",
  },
} as { itemBackground: ItemStyleConfig; itemContent: ItemStyleConfig };

describe("StdNavbarController component", () => {
  it("should render the component with passed id", () => {
    render(
      <StdNavbarController
        label={TEST_LABEL}
        action={noop}
        id={TEST_ID}
        itemsStyleConfig={DEFAULT_CONFIG}
      />
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });
  it("should render the proper content when expanded", () => {
    render(
      <StdNavbarController
        label={TEST_LABEL}
        action={noop}
        expanded
        id={TEST_ID}
        itemsStyleConfig={DEFAULT_CONFIG}
      />
    );
    expect(screen.getByTitle(StdIconId.KeyboardDoubleArrowLeft)).toBeDefined();
    expect(screen.getByText(TEST_LABEL)).toBeDefined();
  });
  it("should render the proper content when expanded is false", () => {
    render(
      <StdNavbarController
        label={TEST_LABEL}
        action={noop}
        expanded={false}
        id={TEST_ID}
        itemsStyleConfig={DEFAULT_CONFIG}
      />
    );
    expect(screen.getByTitle(StdIconId.KeyboardDoubleArrowRight)).toBeDefined();
    expect(screen.queryByText(TEST_LABEL)).not.toBeDefined();
  });
});
