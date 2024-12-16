/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  INPUT_COMMON_VARIANT_CLASSES,
  INPUT_ERROR_CLASSES,
  INPUT_HELPER_CLASSES,
  INPUT_TEXT_CLASSES,
  INPUT_VARIANT_DISABLED_CLASSES,
  INPUT_WRAPPER_CLASSES,
  getMaxHeightClass,
  inputTextAreaClassBuilder,
} from '../inputTextAreaClassBuilder.ts';

const TEST_MAX_HEIGHT = 14;

describe('inputTextAreaClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(inputTextAreaClassBuilder(false, false).wrapperClasses.includes(INPUT_WRAPPER_CLASSES)).toBe(true);
    expect(inputTextAreaClassBuilder(false, false).helperClasses.includes(INPUT_HELPER_CLASSES)).toBe(true);
    expect(inputTextAreaClassBuilder(false, false).inputClasses.includes(INPUT_COMMON_VARIANT_CLASSES)).toBe(true);
    expect(inputTextAreaClassBuilder(false, false).labelClasses.includes(INPUT_TEXT_CLASSES)).toBe(true);
  });
  it('should have the proper disabled classes', () => {
    expect(inputTextAreaClassBuilder(true, false).inputClasses.includes(INPUT_VARIANT_DISABLED_CLASSES)).toBe(true);
  });
  it('should have the proper error classes', () => {
    expect(inputTextAreaClassBuilder(true, true).inputClasses.includes(INPUT_ERROR_CLASSES.input)).toBe(true);
    expect(inputTextAreaClassBuilder(true, true).labelClasses.includes(INPUT_ERROR_CLASSES.text)).toBe(true);
    expect(inputTextAreaClassBuilder(true, true).helperClasses.includes(INPUT_ERROR_CLASSES.text)).toBe(true);
  });
  it('should have the proper max height class', () => {
    expect(inputTextAreaClassBuilder(true, true).inputClasses.includes(getMaxHeightClass(0))).toBe(false);

    expect(
      inputTextAreaClassBuilder(true, true, TEST_MAX_HEIGHT).inputClasses.includes(getMaxHeightClass(TEST_MAX_HEIGHT)),
    ).toBe(true);
  });
});
