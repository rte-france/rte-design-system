/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";

import { noop } from "@/shared/utils/defaultUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import StdChipToggle from "../StdChipToggle";

const TEST_LABEL = "Label";
const TEST_VALUE = "value";
const TEST_ICON = StdIconId.Add;
const TEST_ID = "my-chip";

describe("StdChipToggle", () => {
  it("renders the default StdChipToggle component", () => {
    render(
      <StdChipToggle value={TEST_VALUE} onChange={noop} label={TEST_LABEL} />
    );
    const chip = screen.getByRole("listitem");
    expect(chip).toBeDefined();
    expect(screen.getByText(TEST_LABEL)).toBeDefined();
  });

  it("renders the StdChipToggle with the proper id when specified", () => {
    render(
      <StdChipToggle
        value={TEST_VALUE}
        onChange={noop}
        label={TEST_LABEL}
        id={TEST_ID}
      />
    );
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("renders the default StdChipToggle component with the expected value", () => {
    render(
      <StdChipToggle
        value={TEST_VALUE}
        onChange={noop}
        label={TEST_LABEL}
        id={TEST_ID}
      />
    );
    const chip = screen.getByRole("checkbox");
    expect((chip as HTMLInputElement).value).toBe(TEST_VALUE);
  });

  it("renders the StdChipToggle component with icon + label", () => {
    render(
      <StdChipToggle
        value={TEST_VALUE}
        onChange={noop}
        label={TEST_LABEL}
        icon={TEST_ICON}
      />
    );
    const chip = screen.getByRole("listitem");
    expect(chip).toBeDefined();
    expect(screen.getByText(TEST_LABEL)).toBeDefined();
    expect(screen.getByTitle(TEST_ICON)).toBeDefined();
  });

  it("renders the StdChipToggle component with icon only", () => {
    render(
      <StdChipToggle value={TEST_VALUE} onChange={noop} icon={TEST_ICON} />
    );
    const chip = screen.getByRole("listitem");
    expect(chip).toBeDefined();
    expect(screen.getByTitle(TEST_ICON)).toBeDefined();
  });
});
