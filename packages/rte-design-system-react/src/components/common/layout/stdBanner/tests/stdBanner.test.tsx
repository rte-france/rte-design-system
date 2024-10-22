/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { render, screen } from "@testing-library/react";

import { noop } from "@/shared/utils/defaultUtils";
import { StdIconId } from "@/shared/utils/mappings/common/iconMaps";
import StdBanner from "../StdBanner";

const TEST_MESSAGE = "Label";
const TEST_CLOSE_ICON = StdIconId.Close;
const TEST_ID = "my-alert";

describe("StdBanner", () => {
  it("renders the default StdBanner component", () => {
    render(<StdBanner message={TEST_MESSAGE} />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeDefined();

    render(<StdBanner message={TEST_MESSAGE} id={TEST_ID} />);
    expect(document.querySelector(`#${TEST_ID}`)).toBeDefined();
  });

  it("renders the StdBanner component with delete", () => {
    render(<StdBanner message={TEST_MESSAGE} onClose={noop} />);
    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeDefined();
    const closeIcon = screen.getByTitle(TEST_CLOSE_ICON);
    expect(closeIcon).toBeDefined();
    expect(closeButton).toContain(closeIcon);
  });
});
