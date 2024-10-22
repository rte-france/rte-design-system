/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";
import StdSimpleSlider from "../StdSimpleSlider";

const ATTRIBUTES_WITHOUT_VALUE = "";

const TEST_LABEL = "label";
const TEST_NAME = "simple-slider-name";
const TEST_ID = "simple-slider-id";
const TEST_MIN = 12;
const TEST_MAX = 46;
const TEST_STEP = 4;
const TEST_VALUE = 18;
const TEST_HELPER_TEXT = "Helper Text";
const TEST_HELPER_TEXT_INPUT = "Helper Text Min Input";

describe("StdSimpleSlider", () => {
  it("render the default StdSimpleSlider component", () => {
    render(
      <StdSimpleSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        value={TEST_VALUE}
      />
    );

    const sliderInput = screen.getByRole("slider");
    expect(sliderInput).toBeDefined();
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("render the StdSimpleSlider component with min and max values", () => {
    render(
      <StdSimpleSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        min={TEST_MIN}
        max={TEST_MAX}
        value={TEST_VALUE}
      />
    );

    const sliderInput = screen.getByRole("slider");

    expect(sliderInput.getAttribute("min")).toBe(TEST_MIN.toString());
    expect(sliderInput.getAttribute("max")).toBe(TEST_MAX.toString());
  });

  it("render the StdSimpleSlider component with custom step", () => {
    render(
      <StdSimpleSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        step={TEST_STEP}
        value={TEST_VALUE}
      />
    );

    const sliderInput = screen.getByRole("slider");

    expect(sliderInput.getAttribute("step")).toBe(TEST_STEP.toString());
  });

  it("render the StdSimpleSlider component with default values", () => {
    render(
      <StdSimpleSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        value={TEST_VALUE}
      />
    );

    const sliderInput: HTMLInputElement = screen.getByRole("slider");

    expect(sliderInput.value).toBe(TEST_VALUE.toString());
  });

  it("render the StdSimpleSlider component with readonly", () => {
    render(
      <StdSimpleSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        readOnly
        value={TEST_VALUE}
      />
    );

    const sliderInput = screen.getByRole("slider");

    expect(sliderInput.getAttribute("readonly")).toBe(ATTRIBUTES_WITHOUT_VALUE);
  });

  it("render the StdSimpleSlider component with disabled", () => {
    render(
      <StdSimpleSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        disabled
        helperText={TEST_HELPER_TEXT}
        value={TEST_VALUE}
      />
    );
  });

  it("render the StdSimpleSlider component with helper text", () => {
    render(
      <StdSimpleSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        helperText={TEST_HELPER_TEXT}
        value={TEST_VALUE}
      />
    );

    expect(screen.getByText(TEST_HELPER_TEXT)).toBeDefined();
  });

  it("render the StdSimpleSlider component with helper text on the input", () => {
    render(
      <StdSimpleSlider
        sliderType="simple"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        helperTextInput={TEST_HELPER_TEXT_INPUT}
        value={TEST_VALUE}
      />
    );

    expect(screen.getByText(TEST_HELPER_TEXT_INPUT)).toBeDefined();
  });
});
