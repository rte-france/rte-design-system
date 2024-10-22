/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { delay } from "@/shared/utils/asyncUtils";
import { renderHook } from "@testing-library/react";
import useDebounce from "../useDebounce";
import { vi } from "vitest";

describe("useDebounce", () => {
  it("callback called after delay", async () => {
    const callback = vi.fn();
    const { rerender } = renderHook((value) => useDebounce(callback, value), {
      initialProps: "0",
    });
    rerender("1");
    expect(callback).not.toHaveBeenCalled();
    await vi.waitFor(() => expect(callback).toHaveBeenCalled());
  });
  it("callback called after delay but reset if dependency change", async () => {
    const callback = vi.fn();
    const { rerender } = renderHook((value) => useDebounce(callback, value), {
      initialProps: "0",
    });
    expect(callback).not.toHaveBeenCalled();
    await delay(50);
    rerender("1");
    await delay(50);
    rerender("2");
    await delay(50);
    rerender("3");
    expect(callback).not.toHaveBeenCalled();
    await vi.waitFor(() => expect(callback).toHaveBeenCalled());
  });

  it("updating callback do not reset timer", async () => {
    const callback = vi.fn();
    const callback2 = vi.fn();
    const { rerender } = renderHook(
      ({ callback: cb, value }) => useDebounce(cb, value),
      {
        initialProps: { callback, value: "0" },
      }
    );
    rerender({ callback, value: "1" });
    expect(callback).not.toHaveBeenCalled();
    await delay(100);
    rerender({ callback: callback2, value: "1" });
    await delay(110);
    expect(callback).not.toHaveBeenCalled();
    expect(callback2).toHaveBeenCalled();
  });
});
