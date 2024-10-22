/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateFakeBreadcrumb } from "@/mocks/data/components/breadcrumbItems.mock";
import { renderWithRouter } from "@/shared/test/testUtils";
import { screen } from "@testing-library/react";
import StdBreadcrumbItem from "../StdBreadcrumbItem";

const BREADCRUMB_ITEM = generateFakeBreadcrumb(1)[0];
const TEST_ID = "breadcrumb-id";

describe("StdBreadcrumbItem", () => {
  it("renders the breadcrumb item with the proper id", () => {
    renderWithRouter(
      <StdBreadcrumbItem
        label={BREADCRUMB_ITEM.label}
        target={BREADCRUMB_ITEM.target}
        id={TEST_ID}
      />
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });
  it("renders the breadcrumb item with the proper label", () => {
    renderWithRouter(
      <StdBreadcrumbItem
        label={BREADCRUMB_ITEM.label}
        target={BREADCRUMB_ITEM.target}
      />
    );
    expect(screen.getByRole("link")).toBeDefined();
    expect(screen.getByText(BREADCRUMB_ITEM.label)).toBeDefined();
  });
});
