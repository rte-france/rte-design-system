/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { fireEvent, render, screen } from "@testing-library/react";

import { RefObject } from "react";
import StdInputNumber from "../StdInputNumber";
import { getInputNumberValue } from "../utils";
import { vitest } from "vitest";

const TEST_NAME = "my-input-number";
const TEST_LABEL = "Label";
const TEST_HELPER = "Helper";
const TEST_ID = "Id";
const TEST_PLACEHOLDER = "Placeholder";
const TEST_DEFAULT = 45;
const TEST_VARIANT = "text";
const TEST_MIN = 10;
const TEST_MAX = 30;

const defaultInputSetup = () => {
  const onChange = vitest.fn();
  const component = render(
    <StdInputNumber
      name={TEST_NAME}
      label={TEST_LABEL}
      helperText={TEST_HELPER}
      id={TEST_ID}
      placeHolder={TEST_PLACEHOLDER}
      defaultValue={TEST_DEFAULT}
      onChange={onChange}
    />
  );
  const input: HTMLInputElement = screen.getByLabelText(TEST_LABEL);
  const label: HTMLSpanElement = screen.getByText(TEST_LABEL);
  const helper: HTMLSpanElement = screen.getByText(TEST_HELPER);
  return { ...component, input, label, helper, onChange };
};

describe("StdInputNumber", () => {
  it("renders the default StdInputNumber component", () => {
    const { input, label, helper } = defaultInputSetup();
    expect(input).toBeDefined();
    expect(label).toBeDefined();
    expect(helper).toBeDefined();
  });

  it("update Props should update display", () => {
    const { rerender, input, label, helper } = defaultInputSetup();
    const NEW_LABEL = "TEST_LABEL";
    const NEW_HELPER = "TEST_HELPER";
    const NEW_PLACEHOLDER = "TEST_PLACEHOLDER";
    const NEW_DEFAULT = 12;
    rerender(
      <StdInputNumber
        name={TEST_NAME}
        label={NEW_LABEL}
        helperText={NEW_HELPER}
        placeHolder={NEW_PLACEHOLDER}
        variant={TEST_VARIANT}
        defaultValue={NEW_DEFAULT}
      />
    );
    expect(input.value).toBe(TEST_DEFAULT.toString());
    expect(label.textContent).toBe(NEW_LABEL);
    expect(helper.textContent).toBe(NEW_HELPER);
    expect(input.placeholder).toBe(NEW_PLACEHOLDER);
  });

  it("update value after click on buttons", () => {
    render(
      <StdInputNumber
        name={TEST_NAME}
        label={TEST_LABEL}
        helperText={TEST_HELPER}
        id={TEST_ID}
        placeHolder={TEST_PLACEHOLDER}
        defaultValue={TEST_DEFAULT}
        variant={TEST_VARIANT}
      />
    );
    const numberInput: HTMLInputElement = screen.getByLabelText(TEST_LABEL);
    const [deleteButton, addButton] = screen.getAllByRole("button");
    fireEvent.click(deleteButton, new MouseEvent("click"));
    expect(parseInt(numberInput.value)).toBe(TEST_DEFAULT - 1);

    fireEvent.click(addButton, new MouseEvent("click"));
    fireEvent.click(addButton, new MouseEvent("click"));
    expect(parseInt(numberInput.value)).toBe(TEST_DEFAULT + 1);
  });

  it("input limit value with min and max props", () => {
    const { rerender, input } = defaultInputSetup();
    rerender(
      <StdInputNumber
        name={TEST_NAME}
        label={TEST_LABEL}
        helperText={TEST_HELPER}
        id={TEST_ID}
        placeHolder={TEST_PLACEHOLDER}
        defaultValue={TEST_DEFAULT}
        variant={TEST_VARIANT}
        min={TEST_MIN}
        max={TEST_MAX}
      />
    );

    fireEvent.change(input, { target: { value: "12" } });
    expect(input.value).toBe("12");

    fireEvent.change(input, { target: { value: "20" } });
    expect(input.value).toBe("20");

    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.blur(input);
    expect(input.value).toBe(TEST_MIN.toString());

    fireEvent.change(input, { target: { value: "40" } });
    fireEvent.blur(input);
    expect(input.value).toBe(TEST_MAX.toString());
  });
});

describe("getInputNumberValue function", () => {
  it("should return default value when inputRef is null", () => {
    const inputRef = { current: null };
    const defaultValue = 10;
    const result = getInputNumberValue(inputRef, defaultValue);
    expect(result).toEqual(defaultValue);
  });

  it("should return input value when inputRef has a valid numeric value", () => {
    const defaultValue = 10;
    const inputValue = 20;
    const inputRef = {
      current: { valueAsNumber: inputValue },
    } as RefObject<HTMLInputElement>;
    const result = getInputNumberValue(inputRef, defaultValue);
    expect(result).toEqual(inputValue);
  });

  it("should return default value when inputRef has an invalid value", () => {
    const defaultValue = 10;
    const inputRef = {
      current: { valueAsNumber: "invalid" },
    } as unknown as RefObject<HTMLInputElement>;
    const result = getInputNumberValue(inputRef, defaultValue);
    expect(result).toEqual(defaultValue);
  });
});
