/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { COMMON_CLASSSES, SIZE_CLASSES, spinnerClassBuilder } from '../spinnerClassBuilder';

describe('spinnerClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(spinnerClassBuilder('small').includes(COMMON_CLASSSES)).toBe(true);
    expect(spinnerClassBuilder('medium').includes(COMMON_CLASSSES)).toBe(true);
    expect(spinnerClassBuilder('large').includes(COMMON_CLASSSES)).toBe(true);
  });

  it('should have the proper size classes', () => {
    expect(spinnerClassBuilder('small').includes(SIZE_CLASSES.small)).toBe(true);
    expect(spinnerClassBuilder('medium').includes(SIZE_CLASSES.medium)).toBe(true);
    expect(spinnerClassBuilder('large').includes(SIZE_CLASSES.large)).toBe(true);
  });
});
