/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { isLastIndex } from '../arrayUtils';

describe('arrayUtils test', () => {
  it('should empty array should not have lastIndex', () => {
    const result = isLastIndex(0, Array(0));
    expect(result).toBe(false);
  });
  it('should array with last index should return true', () => {
    const result = isLastIndex(0, Array(1));
    expect(result).toBe(true);
  });
  it('should 2 size array with first index should return false', () => {
    const result = isLastIndex(0, Array(2));
    expect(result).toBe(false);
  });
  it('should 2 size array with last index should return true', () => {
    const result = isLastIndex(1, Array(2));
    expect(result).toBe(true);
  });
});
