/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";
import StdDualSlider from "../StdDualSlider";

const ATTRIBUTES_WITHOUT_VALUE = "";

const TEST_LABEL = "label";
const TEST_NAME = "simple-slider-name";
const TEST_ID = "simple-slider-id";
const TEST_MIN = 12;
const TEST_MAX = 46;
const TEST_STEP = 4;
const TEST_VALUES: [number, number] = [12, 18];
const TEST_HELPER_TEXT = "Helper Text";
const TEST_HELPER_TEXTS_INPUT: [string, string] = [
  "Helper Text Min",
  "Helper Text Max",
];

describe("StdDualSlider", () => {
  it("render the default StdDualSlider component", () => {
    render(
      <StdDualSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        values={TEST_VALUES}
      />
    );

    const sliderInputs = screen.getAllByRole("slider");
    sliderInputs.forEach((slider) => expect(slider).toBeDefined());
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("render the StdDualSlider component with min and max values", () => {
    render(
      <StdDualSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        min={TEST_MIN}
        max={TEST_MAX}
        values={TEST_VALUES}
      />
    );

    const sliderInputs = screen.getAllByRole("slider");
    sliderInputs.forEach((slider) => {
      expect(slider.getAttribute("min")).toBe(TEST_MIN.toString());
      expect(slider.getAttribute("max")).toBe(TEST_MAX.toString());
    });
  });

  it("render the StdDualSlider component with custom step", () => {
    render(
      <StdDualSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        step={TEST_STEP}
        values={TEST_VALUES}
      />
    );

    const sliderInputs = screen.getAllByRole("slider");
    sliderInputs.forEach((slider) => {
      expect(slider.getAttribute("step")).toBe(TEST_STEP.toString());
    });
  });

  it("render the StdDualSlider component with the expected values", () => {
    render(
      <StdDualSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        values={TEST_VALUES}
      />
    );

    const [minSlider, maxSlider]: HTMLInputElement[] =
      screen.getAllByRole("slider");
    expect(minSlider.value).toBe(TEST_VALUES[0].toString());
    expect(maxSlider.value).toBe(TEST_VALUES[1].toString());
  });

  it("render the StdDualSlider component with readonly", () => {
    render(
      <StdDualSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        readOnly
        values={TEST_VALUES}
      />
    );

    const sliderInputs = screen.getAllByRole("slider");
    sliderInputs.forEach((slider) => {
      expect(slider.getAttribute("readonly")).toBe(ATTRIBUTES_WITHOUT_VALUE);
    });
  });

  it("render the StdDualSlider component with disabled", () => {
    render(
      <StdDualSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        disabled
        helperText={TEST_HELPER_TEXT}
        values={TEST_VALUES}
      />
    );
  });

  it("render the StdDualSlider component with helper text", () => {
    render(
      <StdDualSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        helperText={TEST_HELPER_TEXT}
        values={TEST_VALUES}
      />
    );

    expect(screen.getByText(TEST_HELPER_TEXT)).toBeDefined();
  });

  it("render the StdDualSlider component with helper text on the input", () => {
    render(
      <StdDualSlider
        sliderType="dual"
        label={TEST_LABEL}
        name={TEST_NAME}
        id={TEST_ID}
        helperTextInputs={TEST_HELPER_TEXTS_INPUT}
        values={TEST_VALUES}
      />
    );

    expect(screen.getByText(TEST_HELPER_TEXTS_INPUT[0])).toBeDefined();
    expect(screen.getByText(TEST_HELPER_TEXTS_INPUT[1])).toBeDefined();
  });
});
