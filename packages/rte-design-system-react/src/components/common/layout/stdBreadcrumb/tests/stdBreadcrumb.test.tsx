/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateFakeBreadcrumb } from "@/mocks/data/components/breadcrumbItems.mock";
import { renderWithRouter } from "@/shared/test/testUtils";
import { screen } from "@testing-library/react";
import StdBreadcrumb from "../StdBreadcrumb";

describe("StdBreadcrumb", () => {
  it("displays all the links if the list has less than 4 items with no button", () => {
    const ItemList = generateFakeBreadcrumb(3);
    renderWithRouter(<StdBreadcrumb items={ItemList} />);
    ItemList.forEach((item) => {
      expect(screen.getByText(item.label)).toBeDefined();
    });

    expect(screen.queryByRole("button")).not.toBeDefined();
  });
  it("only displays the last 2 links if the list has 4 items or more with a More icon button", () => {
    const ItemList = generateFakeBreadcrumb(6);

    renderWithRouter(<StdBreadcrumb items={ItemList} />);

    ItemList.slice(-2).forEach((item) => {
      expect(screen.getByText(item.label)).toBeDefined();
    });

    ItemList.slice(0, -2).forEach((item) => {
      expect(screen.queryByText(item.label)).not.toBeDefined();
    });

    expect(screen.getByRole("button")).toBeDefined();
  });
});
