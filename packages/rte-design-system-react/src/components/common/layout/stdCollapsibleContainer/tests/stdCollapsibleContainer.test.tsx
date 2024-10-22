/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import { render, screen } from "@testing-library/react";
import StdCollapsibleContainer from "../StdCollapsibleContainer";

const TEST_ID = "some-id";
const TEST_CONTENT = "Some content";
const TEST_SHOW_ICON = StdIconId.KeyboardArrowDown;
const TEST_HIDE_ICON = StdIconId.KeyboardArrowUp;

describe("StdCollapsibleContainer", () => {
  it("renders StdCollapsibleContainer", () => {
    render(
      <StdCollapsibleContainer id={TEST_ID}>
        {TEST_CONTENT}
      </StdCollapsibleContainer>
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("renders StdCollapsibleContainer with children content and hide icon", () => {
    render(
      <StdCollapsibleContainer defaultVisible>
        <div>{TEST_CONTENT}</div>
      </StdCollapsibleContainer>
    );
    expect(screen.getByText(TEST_CONTENT)).toBeDefined();
    expect(screen.getByTitle(TEST_HIDE_ICON)).toBeDefined();
  });

  it("renders StdCollapsibleContainer without children content and show icon", () => {
    render(
      <StdCollapsibleContainer>
        <div>{TEST_CONTENT}</div>
      </StdCollapsibleContainer>
    );
    expect(screen.queryByText(TEST_CONTENT)).not.toBeDefined();
    expect(screen.getByTitle(TEST_SHOW_ICON)).toBeDefined();
  });
});
