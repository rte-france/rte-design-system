/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { menuItemSample } from "@/mocks/data/features/menuItemData.mock";
import { renderWithRouter } from "@/shared/test/testUtils";
import { screen } from "@testing-library/react";
import { ItemStyleConfig } from "../StdNavbar";
import StdNavbarMenuItem from "../StdNavbarMenuItem";

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

describe("StdNavbarMenuItem component", () => {
  it("should render the component with the default behavior and proper id", () => {
    renderWithRouter(
      <StdNavbarMenuItem
        item={menuItemSample}
        itemsStyleConfig={DEFAULT_CONFIG}
      />
    );
    expect(document.querySelector(`#${menuItemSample.id}`)).toBeDefined();
    expect(screen.getByRole("link")).toBeDefined();
    expect(screen.getByTitle(menuItemSample.icon)).toBeDefined();
  });
  it("should render the item label if expanded is true", () => {
    renderWithRouter(
      <StdNavbarMenuItem
        item={menuItemSample}
        expanded
        itemsStyleConfig={DEFAULT_CONFIG}
      />
    );
    expect(screen.getByText(menuItemSample.label)).toBeDefined();
  });
  it("should not render the item label if expanded is not true", () => {
    renderWithRouter(
      <StdNavbarMenuItem
        item={menuItemSample}
        expanded={false}
        itemsStyleConfig={DEFAULT_CONFIG}
      />
    );
    expect(screen.queryByText(menuItemSample.label)).not.toBeDefined();
  });
});
