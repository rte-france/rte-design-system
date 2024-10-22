/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { BackResponseOK } from "@/shared/types/api/API.type";
import { renderHook } from "@testing-library/react";
import { useApiWithParser } from "../useAPIWithParser";
import { vi } from "vitest";

describe("useApiWithParser", () => {
  it("response should be updated after call", async () => {
    const promiseNoop: Promise<BackResponseOK<string>> = new Promise(
      (resolve) => {
        resolve({ inError: false, data: "test" });
      }
    );
    const mapper = (text: string) =>
      new Promise((resolve) => {
        resolve(`mapper${text}`);
      });

    const { result } = renderHook(() =>
      useApiWithParser(() => promiseNoop, mapper, { skipFirstInit: false })
    );
    expect(result.current.response).toBeUndefined();
    await vi.waitFor(() => expect(result.current.response).toBe("mappertest"));
  });
});
