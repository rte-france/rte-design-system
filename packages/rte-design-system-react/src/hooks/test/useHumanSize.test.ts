/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import RenderHookWrapper from '@/shared/test/renderHookWrapper';
import { useHumanSize } from '../useHumanSize';

const TEST_BYTE = 23;
const TEST_KILOBYTE = 5660;
const TEST_MEGABYTE = 2130215;
const TEST_GIGABYTE = 7460331658;
const TEST_TERABYTE = 9523456102369;

describe('useHumanSize', () => {
  it('should return the expected value and text unit for byte', () => {
    const {
      result: {
        current: { formatHumanSize },
      },
    } = RenderHookWrapper.create(() => useHumanSize()).renderHook();
    expect(formatHumanSize(TEST_BYTE)).toBe(`23 o`);
  });
  it('should return the expected value and text unit for kilobyte', () => {
    const {
      result: {
        current: { formatHumanSize },
      },
    } = RenderHookWrapper.create(() => useHumanSize()).renderHook();
    expect(formatHumanSize(TEST_KILOBYTE)).toBe(`6 Ko`);
  });
  it('should return the expected value and text unit for megabyte', () => {
    const {
      result: {
        current: { formatHumanSize },
      },
    } = RenderHookWrapper.create(() => useHumanSize()).renderHook();
    expect(formatHumanSize(TEST_MEGABYTE)).toBe(`2 Mo`);
  });
  it('should return the expected value and text unit for gigabyte', () => {
    const {
      result: {
        current: { formatHumanSize },
      },
    } = RenderHookWrapper.create(() => useHumanSize()).renderHook();
    expect(formatHumanSize(TEST_GIGABYTE)).toBe(`7 Go`);
  });
  it('should return the expected value and text unit for terabyte', () => {
    const {
      result: {
        current: { formatHumanSize },
      },
    } = RenderHookWrapper.create(() => useHumanSize()).renderHook();

    expect(formatHumanSize(TEST_TERABYTE)).toBe(`10 To`);
  });
});
