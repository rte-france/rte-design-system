/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import { useState } from "react";
import StdInputTextArea from "../StdInputTextArea";
import { vitest } from "vitest";

const TEST_LABEL = "Label";
const TEST_HELPER = "Helper";
const TEST_ID = "Id";
const TEST_PLACEHOLDER = "Placeholder";
const TEST_DEFAULT = "default";

const defaultInputSetup = () => {
  const onChange = vitest.fn();
  const component = render(
    <StdInputTextArea
      label={TEST_LABEL}
      helperText={TEST_HELPER}
      id={TEST_ID}
      placeHolder={TEST_PLACEHOLDER}
      value={TEST_DEFAULT}
      onChange={onChange}
    />
  );
  const input: HTMLInputElement = screen.getByLabelText(TEST_LABEL);
  const label: HTMLSpanElement = screen.getByText(TEST_LABEL);
  const helper: HTMLSpanElement = screen.getByText(TEST_HELPER);
  return { ...component, input, label, helper, onChange };
};

describe("StdInputTextArea", () => {
  it("renders the default StdInputText component", () => {
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
    const NEW_DEFAULT = "NEW_DEFAULT";
    rerender(
      <StdInputTextArea
        label={NEW_LABEL}
        helperText={NEW_HELPER}
        placeHolder={NEW_PLACEHOLDER}
        value={NEW_DEFAULT}
      />
    );
    expect(input.value).toBe(NEW_DEFAULT);
    expect(label.textContent).toBe(NEW_LABEL);
    expect(helper.textContent).toBe(NEW_HELPER);
    expect(input.placeholder).toBe(NEW_PLACEHOLDER);
  });

  it('required should add "*" to the end of label', () => {
    const component = render(
      <StdInputTextArea label={TEST_LABEL} required value="" />
    );
    const input: HTMLInputElement = screen.getByLabelText(TEST_LABEL);
    expect(input).toHaveAttribute("required");
    const star = screen.getByText("*");
    expect(star).toBeDefined();
    component.rerender(<StdInputTextArea label={TEST_LABEL} value="" />);
    expect(star).not.toBeDefined();
  });

  const StatefulInputTextArea = () => {
    const [value, setValue] = useState("");
    return (
      <StdInputTextArea
        label={TEST_LABEL}
        value={value}
        onChange={(e) => setValue(e)}
      />
    );
  };

  it("user input should update stateful value", async () => {
    const user = userEvent.setup();
    render(<StatefulInputTextArea />);
    const input: HTMLInputElement = screen.getByLabelText(TEST_LABEL);
    expect(input.value).toBe("");

    await user.type(input, "test");
    expect(input.value).toBe("test");
  });
});
