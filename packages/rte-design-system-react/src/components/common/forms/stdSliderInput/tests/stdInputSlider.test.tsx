/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";
import StdInputSlider from "../StdInputSlider";

const TEST_LABEL = "label";
const TEST_NAME = "simple-slider-name";
const TEST_ID = "simple-slider-id";

describe("StdSliderSimple", () => {
  it("render the simple slider", () => {
    render(
      <StdInputSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        value={10}
      />
    );
    expect(screen.getAllByRole("slider").length).toBe(1);
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("render the dual slider", () => {
    render(
      <StdInputSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        values={[0, 10]}
      />
    );
    expect(screen.getAllByRole("slider").length).toBe(2);
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });
});
