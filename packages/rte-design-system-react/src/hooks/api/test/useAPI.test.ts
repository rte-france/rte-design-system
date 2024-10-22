/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { BackResponseOK } from "@/shared/types/api/API.type";
import { renderHook } from "@testing-library/react";
import { useApi } from "../useAPI";
import { vi } from "vitest";

describe("useApi", () => {
  it("response should be updated after call", async () => {
    const promiseNoop: Promise<BackResponseOK<string>> = new Promise(
      (resolve) => {
        resolve({ inError: false, data: "test" });
      }
    );
    const { result } = renderHook(() =>
      useApi(() => promiseNoop, { skipFirstInit: false })
    );
    expect(result.current.response).toBeUndefined();
    await vi.waitFor(() => expect(result.current.response).toBe("test"));
  });
});
