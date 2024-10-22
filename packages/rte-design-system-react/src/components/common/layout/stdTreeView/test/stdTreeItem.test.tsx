/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render } from "@testing-library/react";
import StdTreeItem from "../StdTreeItem";
import { oneItemTree, smallTree } from "./renderDataUtils";
import { vi } from "vitest";

describe("StdTreeItem", () => {
  it("renders the default StdTreeItem component", () => {
    const renderItem = vi.fn();
    render(<StdTreeItem tree={oneItemTree} itemRender={renderItem} />);
    expect(renderItem).toHaveBeenCalled();
  });

  it("default Open should expand first item", () => {
    const renderItem = vi.fn();
    render(
      <StdTreeItem tree={smallTree} itemRender={renderItem} defaultOpen />
    );
    expect(renderItem).toHaveBeenCalledTimes(2);
  });
  it("default close (defaultOpen false) should collapse first item", () => {
    const renderItem = vi.fn();
    render(
      <StdTreeItem
        tree={smallTree}
        itemRender={renderItem}
        defaultOpen={false}
      />
    );
    expect(renderItem).toHaveBeenCalledTimes(1);
  });

  it("default close (defaultOpen false) should collapse first item", () => {
    const renderItem = vi.fn();
    render(
      <StdTreeItem
        tree={smallTree}
        itemRender={renderItem}
        defaultOpen={false}
      />
    );
    expect(renderItem).toHaveBeenCalledTimes(1);
  });
});
