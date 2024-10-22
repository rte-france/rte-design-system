/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";

import { noop } from "@/shared/utils/defaultUtils";
import StdPaginationControl from "../StdPaginationControl";

const TEST_ID = "pagination-control";
const TEST_LABEL = "label";

describe("StdPaginationControl", () => {
  it("renders the default StdPaginationControl component with the proper id", () => {
    render(
      <StdPaginationControl
        label={TEST_LABEL}
        options={[20, 30]}
        selectedOption={1}
        id={TEST_ID}
        onChange={noop}
      />
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("renders the default StdPaginationControl component with the proper label", () => {
    render(
      <StdPaginationControl
        label={TEST_LABEL}
        options={[20, 30]}
        selectedOption={1}
        id={TEST_ID}
        onChange={noop}
      />
    );
    expect(screen.getByText(TEST_LABEL)).toBeDefined();
  });

  it("renders the StdPaginationControl with the select button", () => {
    render(
      <StdPaginationControl
        label={TEST_LABEL}
        options={[20, 30]}
        selectedOption={1}
        id={TEST_ID}
        onChange={noop}
      />
    );
    expect(screen.getByRole("button")).toBeDefined();
  });
});
