/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render } from "@testing-library/react";

import StdSpinner from "../StdSpinner";
const TEST_ID = "test-spinner";

describe("StdSpinner", () => {
  it("renders the StdSpinner component with the proper id", () => {
    render(<StdSpinner size="medium" id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });
});
