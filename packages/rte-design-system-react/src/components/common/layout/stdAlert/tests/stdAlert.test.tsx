/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";

import { noop } from "@/shared/utils/defaultUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import StdAlert from "../StdAlert";

const TEST_MESSAGE = "Label";
const TEST_ICON = StdIconId.Add;
const TEST_CLOSE_ICON = StdIconId.Close;
const TEST_ID = "my-alert";
const TEST_ACTION = {
  label: "test-action",
  onClick: noop,
};

describe("StdAlert", () => {
  it("renders the default StdAlert component", () => {
    render(<StdAlert message={TEST_MESSAGE} />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeDefined();
  });

  it("renders the StdAlert with the proper id when specified", () => {
    render(<StdAlert message={TEST_MESSAGE} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("renders the StdAlert component with delete", () => {
    render(<StdAlert message={TEST_MESSAGE} icon={TEST_ICON} onClose={noop} />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeDefined();
    expect(alert.textContent).toContain(TEST_MESSAGE);
    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeDefined();
    const closeIcon = screen.getByTitle(TEST_CLOSE_ICON);
    expect(closeIcon).toBeDefined();
    expect(closeButton.contains(closeIcon)).toBe(true);
  });

  it("renders the StdAlert component with action", () => {
    render(
      <StdAlert message={TEST_MESSAGE} icon={TEST_ICON} action={TEST_ACTION} />
    );
    const alert = screen.getByRole("alert");
    expect(alert).toBeDefined();
    expect(alert.textContent).toContain(TEST_MESSAGE);
    const actionButton = screen.getByRole("button");
    expect(actionButton).toBeDefined();
    expect(actionButton.textContent).toBe(TEST_ACTION.label);
  });

  it("renders the StdAlert component with action + delete", () => {
    render(
      <StdAlert
        message={TEST_MESSAGE}
        icon={TEST_ICON}
        action={TEST_ACTION}
        onClose={noop}
      />
    );
    const alert = screen.getByRole("alert");
    expect(alert).toBeDefined();
    expect(alert.textContent).toContain(TEST_MESSAGE);

    const [actionButton, closeButton] = screen.getAllByRole("button");
    expect(closeButton).toBeDefined();
    const closeIcon = screen.getByTitle(TEST_CLOSE_ICON);
    expect(closeIcon).toBeDefined();
    expect(closeButton.contains(closeIcon)).toBe(true);

    expect(actionButton).toBeDefined();
    expect(actionButton.textContent).toBe(TEST_ACTION.label);
  });
});
