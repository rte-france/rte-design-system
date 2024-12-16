/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  numberClassBuilder,
  NUMBER_WRAPPER_CLASSES,
  NUMBER_VARIANT_CLASSES,
  NUMBER_HELPER_CLASSES,
  NUMBER_COMMON_VARIANT_CLASSES,
  NUMBER_CLASSES,
  NUMBER_VARIANT_DISABLED_CLASSES,
  NUMBER_ERROR_CLASSES,
  NUMBER_INPUT_CLASSES,
} from '../numberClassBuilder.ts';

describe('numberClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(numberClassBuilder('outlined', false, false).wrapperClasses.includes(NUMBER_WRAPPER_CLASSES)).toBe(true);
    expect(numberClassBuilder('outlined', false, false).helperClasses.includes(NUMBER_HELPER_CLASSES)).toBe(true);
    expect(numberClassBuilder('outlined', false, false).containerClasses.includes(NUMBER_COMMON_VARIANT_CLASSES)).toBe(
      true,
    );
    expect(numberClassBuilder('outlined', false, false).labelClasses.includes(NUMBER_CLASSES)).toBe(true);
    expect(numberClassBuilder('outlined', false, false).inputClasses.includes(NUMBER_INPUT_CLASSES)).toBe(true);
  });
  it('should have the proper variant and type classes', () => {
    expect(
      numberClassBuilder('outlined', false, false).containerClasses.includes(NUMBER_VARIANT_CLASSES.outlined),
    ).toBe(true);
    expect(numberClassBuilder('text', false, false).containerClasses.includes(NUMBER_VARIANT_CLASSES.text)).toBe(true);
  });
  it('should have the proper disabled classes', () => {
    expect(
      numberClassBuilder('outlined', true, false).containerClasses.includes(
        NUMBER_VARIANT_DISABLED_CLASSES.container.outlined,
      ),
    ).toBe(true);
    expect(
      numberClassBuilder('text', true, false).containerClasses.includes(NUMBER_VARIANT_DISABLED_CLASSES.container.text),
    ).toBe(true);
  });
  it('should have the proper error classes', () => {
    expect(
      numberClassBuilder('outlined', true, true).containerClasses.includes(NUMBER_ERROR_CLASSES.container.outlined),
    ).toBe(true);
    expect(numberClassBuilder('outlined', true, true).labelClasses.includes(NUMBER_ERROR_CLASSES.text)).toBe(true);
    expect(numberClassBuilder('outlined', true, true).helperClasses.includes(NUMBER_ERROR_CLASSES.text)).toBe(true);
    expect(numberClassBuilder('text', true, true).containerClasses.includes(NUMBER_ERROR_CLASSES.container.text)).toBe(
      true,
    );
    expect(numberClassBuilder('text', true, true).labelClasses.includes(NUMBER_ERROR_CLASSES.text)).toBe(true);
    expect(numberClassBuilder('text', true, true).helperClasses.includes(NUMBER_ERROR_CLASSES.text)).toBe(true);
  });
});
