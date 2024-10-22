/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";
import StdProgressBar from "../StdProgressBar";
import { randomNumber } from "@/mocks/mockTools";

const TEST_PROGRESS = randomNumber(100);
const TEST_LABEL = "Label";

describe("StdProgressBar", () => {
  it("render StdProgressBar correctly", () => {
    render(
      <StdProgressBar
        label={TEST_LABEL}
        percent={TEST_PROGRESS}
        state="default"
      />
    );
    expect(screen.getByRole("figure")).toBeDefined();
  });
  it("render StdProgressBar with correct %", () => {
    render(
      <StdProgressBar
        label={TEST_LABEL}
        percent={TEST_PROGRESS}
        state="default"
      />
    );
    expect(screen.getByRole("caption").innerHTML).toBe(`${TEST_PROGRESS}%`);
  });
  it("render StdProgressLabel with error label if state is error,", () => {
    render(
      <StdProgressBar
        label={TEST_LABEL}
        percent={TEST_PROGRESS}
        state="default"
      />
    );
    expect(screen.getByRole("content-info")).toBeDefined();
  });
});
