/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  numberClassBuilder,
  WRAPPER_CLASSES,
  VARIANT_CLASSES,
  HELPER_CLASSES,
  COMMON_VARIANT_CLASSES,
  NUMBER_CLASSES,
  VARIANT_DISABLED_CLASSES,
  ERROR_CLASSES,
  INPUT_CLASSES,
} from '../numberClassBuilder';

describe('numberClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(numberClassBuilder('outlined', false, false).wrapperClasses.includes(WRAPPER_CLASSES)).toBe(true);
    expect(numberClassBuilder('outlined', false, false).helperClasses.includes(HELPER_CLASSES)).toBe(true);
    expect(numberClassBuilder('outlined', false, false).containerClasses.includes(COMMON_VARIANT_CLASSES)).toBe(true);
    expect(numberClassBuilder('outlined', false, false).labelClasses.includes(NUMBER_CLASSES)).toBe(true);
    expect(numberClassBuilder('outlined', false, false).inputClasses.includes(INPUT_CLASSES)).toBe(true);
  });
  it('should have the proper variant and type classes', () => {
    expect(numberClassBuilder('outlined', false, false).containerClasses.includes(VARIANT_CLASSES.outlined)).toBe(true);
    expect(numberClassBuilder('text', false, false).containerClasses.includes(VARIANT_CLASSES.text)).toBe(true);
  });
  it('should have the proper disabled classes', () => {
    expect(
      numberClassBuilder('outlined', true, false).containerClasses.includes(
        VARIANT_DISABLED_CLASSES.container.outlined,
      ),
    ).toBe(true);
    expect(
      numberClassBuilder('text', true, false).containerClasses.includes(VARIANT_DISABLED_CLASSES.container.text),
    ).toBe(true);
  });
  it('should have the proper error classes', () => {
    expect(numberClassBuilder('outlined', true, true).containerClasses.includes(ERROR_CLASSES.container.outlined)).toBe(
      true,
    );
    expect(numberClassBuilder('outlined', true, true).labelClasses.includes(ERROR_CLASSES.text)).toBe(true);
    expect(numberClassBuilder('outlined', true, true).helperClasses.includes(ERROR_CLASSES.text)).toBe(true);
    expect(numberClassBuilder('text', true, true).containerClasses.includes(ERROR_CLASSES.container.text)).toBe(true);
    expect(numberClassBuilder('text', true, true).labelClasses.includes(ERROR_CLASSES.text)).toBe(true);
    expect(numberClassBuilder('text', true, true).helperClasses.includes(ERROR_CLASSES.text)).toBe(true);
  });
});
