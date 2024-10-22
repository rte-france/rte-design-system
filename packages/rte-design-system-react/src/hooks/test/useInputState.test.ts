/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { delay } from "@/shared/utils/asyncUtils";
import { act, renderHook } from "@testing-library/react";
import { useInputFormState } from "../useInputFormState";
import { vitest } from "vitest";

const DEFAULT_VALUE = "default";
const VALUE = "value";
const NEW_VALUE = "new value";

describe("useInputFromState", () => {
  it("init with no parameter should return undefined", () => {
    const { result } = renderHook(() =>
      useInputFormState(undefined, undefined, () => {})
    );
    expect(result.current.value).toBeUndefined();
    expect(result.current.setValue).toBeDefined();
  });

  it("init with default parameter should return default", () => {
    const { result } = renderHook(() =>
      useInputFormState(undefined, DEFAULT_VALUE, () => {})
    );
    expect(result.current.value).toBe(DEFAULT_VALUE);
    expect(result.current.setValue).toBeDefined();
  });

  it("init with value parameter should return same value", () => {
    const { result } = renderHook(() =>
      useInputFormState(VALUE, undefined, () => {})
    );
    expect(result.current.value).toBe(VALUE);
    expect(result.current.setValue).toBeDefined();
  });

  it("init with both value and default value parameters should return default value", () => {
    const { result } = renderHook(() =>
      useInputFormState(VALUE, DEFAULT_VALUE, () => {})
    );
    expect(result.current.value).toBe(DEFAULT_VALUE);
    expect(result.current.setValue).toBeDefined();
  });

  it("calling setValue should update value", () => {
    const { result } = renderHook(() =>
      useInputFormState(VALUE, DEFAULT_VALUE, () => {})
    );
    expect(result.current.value).toBe(DEFAULT_VALUE);
    expect(result.current.setValue).toBeDefined();
    act(() => result.current.setValue(NEW_VALUE));
    expect(result.current.value).toBe(NEW_VALUE);
  });

  it("updating Default should not change Value", () => {
    const initialProps = {
      defaultValue: DEFAULT_VALUE,
      currentValue: VALUE,
      callback: () => {},
    };
    const { result, rerender } = renderHook(
      ({ currentValue, defaultValue, callback }) =>
        useInputFormState(currentValue, defaultValue, callback),
      { initialProps }
    );
    expect(result.current.value).toBe(DEFAULT_VALUE);
    expect(result.current.setValue).toBeDefined();
    rerender({ ...initialProps, defaultValue: NEW_VALUE });
    expect(result.current.value).toBe(DEFAULT_VALUE);
  });

  it("updating Value should update value to new Value", () => {
    const initialProps = {
      defaultValue: DEFAULT_VALUE,
      currentValue: VALUE,
      callback: () => {},
    };
    const { result, rerender } = renderHook(
      ({ currentValue, defaultValue, callback }) =>
        useInputFormState(currentValue, defaultValue, callback),
      { initialProps }
    );
    expect(result.current.value).toBe(DEFAULT_VALUE);
    expect(result.current.setValue).toBeDefined();
    rerender({ ...initialProps, currentValue: NEW_VALUE });
    expect(result.current.value).toBe(NEW_VALUE);
  });

  it("updating Value should send feedback after debounce delai", async () => {
    const onChange = vitest.fn();
    const initialProps = {
      defaultValue: DEFAULT_VALUE,
      currentValue: VALUE,
      callback: onChange,
    };
    const { result, rerender } = renderHook(
      ({ currentValue, defaultValue, callback }) =>
        useInputFormState(currentValue, defaultValue, callback),
      { initialProps }
    );
    expect(result.current.value).toBe(DEFAULT_VALUE);
    expect(result.current.setValue).toBeDefined();
    rerender({ ...initialProps, currentValue: NEW_VALUE });
    expect(result.current.value).toBe(NEW_VALUE);
    expect(onChange).not.toHaveBeenCalled();
    await delay(210);
    expect(onChange).toHaveBeenCalledWith(NEW_VALUE);
  });
  it("callback called after delay but reset if dependency change", async () => {
    const onChange = vitest.fn();
    const initialProps = {
      defaultValue: DEFAULT_VALUE,
      currentValue: VALUE,
      callback: onChange,
    };
    const { rerender } = renderHook(
      ({ currentValue, defaultValue, callback }) =>
        useInputFormState(currentValue, defaultValue, callback),
      { initialProps }
    );
    expect(onChange).not.toHaveBeenCalled();
    await delay(50);
    rerender({ ...initialProps, currentValue: "1" });
    await delay(50);
    rerender({ ...initialProps, currentValue: "2" });
    await delay(50);
    rerender({ ...initialProps, currentValue: "3" });
    expect(onChange).not.toHaveBeenCalled();
    await delay(220);
    expect(onChange).toHaveBeenCalled();
  });
});
