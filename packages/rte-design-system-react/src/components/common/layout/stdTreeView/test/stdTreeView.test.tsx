/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render } from "@testing-library/react";
import StdTreeView from "../StdTreeView";
import { largeTree, oneItemTree, smallTree } from "./renderDataUtils";
import { vi } from "vitest";

const TEST_ID = "testId";
describe("StdTreeView", () => {
  it("renders the default StdTreeView component", () => {
    const renderItem = vi.fn();
    render(
      <StdTreeView tree={oneItemTree} itemRender={renderItem} id={TEST_ID} />
    );
    expect(renderItem).toHaveBeenCalled();
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("tree should expand root item", () => {
    const renderItem = vi.fn();
    render(
      <StdTreeView tree={smallTree} itemRender={renderItem} defaultOpen />
    );
    expect(renderItem).toHaveBeenCalledTimes(2);
  });

  it("tree should expand only root item", () => {
    const renderItem = vi.fn();
    render(<StdTreeView tree={largeTree} itemRender={renderItem} />);
    expect(renderItem).toHaveBeenCalledTimes(4);
  });
});
