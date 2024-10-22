/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import useActiveKeyboard from "../useActiveKeyboard";
import { vitest } from "vitest";

const TEST_EVENT_HANDLER = vitest.fn();
const TEST_ID = "test-id";

describe("useActiveKeyboard", () => {
  it("useActiveKeyboard without custom keyCode", () => {
    const { result } = renderHook(() =>
      useActiveKeyboard<HTMLDivElement>(TEST_EVENT_HANDLER, { id: TEST_ID })
    );
    const [handler, isActiveKeyboard] = result.current;
    expect(handler).toBeDefined();
    expect(isActiveKeyboard).toBeDefined();

    render(
      <div id={TEST_ID} tabIndex={0} {...handler}>
        {TEST_ID}
      </div>
    );
    screen.getByText(TEST_ID).focus();
    fireEvent.keyUp(document.activeElement || document.body, { code: "Space" });

    expect(TEST_EVENT_HANDLER).toHaveBeenCalled();
  });

  it("useActiveKeyboard with custom keyCode", () => {
    const CUSTOM_CODE_KEY = "KeyE";
    const { result } = renderHook(() =>
      useActiveKeyboard<HTMLDivElement>(TEST_EVENT_HANDLER, {
        id: TEST_ID,
        interactiveKeyCodes: [CUSTOM_CODE_KEY],
      })
    );
    const [handler, isActiveKeyboard] = result.current;
    expect(handler).toBeDefined();
    expect(isActiveKeyboard).toBeDefined();

    render(
      <div id={TEST_ID} tabIndex={0} {...handler}>
        {TEST_ID}
      </div>
    );
    screen.getByText(TEST_ID).focus();
    fireEvent.keyUp(document.activeElement || document.body, {
      code: CUSTOM_CODE_KEY,
    });

    expect(TEST_EVENT_HANDLER).toHaveBeenCalled();
  });
});
