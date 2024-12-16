/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  HEADING_COMMON_CLASSES,
  HEADING_SIZE_CLASSES,
  HEADING_WEIGHT_CLASSES,
  headingClassBuilder,
} from '../headingClassBuilder.ts';

describe('headingClassBuilder', () => {
  it('should always include the common classes', () => {
    expect(headingClassBuilder('xl', 'semibold').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('l', 'semibold').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('m', 'semibold').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('s', 'semibold').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('xs', 'semibold').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('xl', 'regular').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('l', 'regular').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('m', 'regular').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('s', 'regular').includes(HEADING_COMMON_CLASSES)).toBe(true);
    expect(headingClassBuilder('xs', 'semibold').includes(HEADING_COMMON_CLASSES)).toBe(true);
  });
  it('should include semibold classes when weight is semibold', () => {
    expect(headingClassBuilder('xl', 'semibold').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(true);
    expect(headingClassBuilder('l', 'semibold').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(true);
    expect(headingClassBuilder('m', 'semibold').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(true);
    expect(headingClassBuilder('s', 'semibold').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(true);
    expect(headingClassBuilder('xs', 'semibold').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(true);
  });
  it('should not include semibold classes when weight is regular', () => {
    expect(headingClassBuilder('xl', 'regular').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(false);
    expect(headingClassBuilder('l', 'regular').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(false);
    expect(headingClassBuilder('m', 'regular').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(false);
    expect(headingClassBuilder('s', 'regular').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(false);
    expect(headingClassBuilder('xs', 'regular').includes(HEADING_WEIGHT_CLASSES['semibold'])).toBe(false);
  });
  it('should always include the size classes', () => {
    expect(headingClassBuilder('xl', 'semibold').includes(HEADING_SIZE_CLASSES['xl'])).toBe(true);
    expect(headingClassBuilder('l', 'semibold').includes(HEADING_SIZE_CLASSES['l'])).toBe(true);
    expect(headingClassBuilder('m', 'semibold').includes(HEADING_SIZE_CLASSES['m'])).toBe(true);
    expect(headingClassBuilder('s', 'semibold').includes(HEADING_SIZE_CLASSES['s'])).toBe(true);
    expect(headingClassBuilder('xs', 'semibold').includes(HEADING_SIZE_CLASSES['xs'])).toBe(true);
    expect(headingClassBuilder('xl', 'regular').includes(HEADING_SIZE_CLASSES['xl'])).toBe(true);
    expect(headingClassBuilder('l', 'regular').includes(HEADING_SIZE_CLASSES['l'])).toBe(true);
    expect(headingClassBuilder('m', 'regular').includes(HEADING_SIZE_CLASSES['m'])).toBe(true);
    expect(headingClassBuilder('s', 'regular').includes(HEADING_SIZE_CLASSES['s'])).toBe(true);
    expect(headingClassBuilder('xs', 'regular').includes(HEADING_SIZE_CLASSES['xs'])).toBe(true);
  });
});
