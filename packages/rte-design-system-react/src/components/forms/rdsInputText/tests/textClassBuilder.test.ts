/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  textClassBuilder,
  TEXT_VARIANT_CLASSES,
  TEXT_CLEAR_CLASSES,
  TEXT_HELPER_CLASSES,
  TEXT_COMMON_VARIANT_CLASSES,
  TEXT_CLASSES,
  TEXT_VARIANT_DISABLED_CLASSES,
  TEXT_ERROR_CLASSES,
  TEXT_INPUT_CLASSES,
  TEXT_BUTTON_CLASSES,
  TEXT_HIDE_BUTTON_CLASSES,
} from '../textClassBuilder.ts';

describe('textClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(
      textClassBuilder('outlined', false, false, false).wrapperInputClasses.includes(TEXT_COMMON_VARIANT_CLASSES),
    ).toBe(true);
    expect(textClassBuilder('outlined', false, false, false).clearClasses.includes(TEXT_CLEAR_CLASSES)).toBe(true);
    expect(textClassBuilder('outlined', false, false, false).helperClasses.includes(TEXT_HELPER_CLASSES)).toBe(true);
    expect(textClassBuilder('outlined', false, false, false).inputClasses.includes(TEXT_INPUT_CLASSES)).toBe(true);
    expect(textClassBuilder('outlined', false, false, false).labelClasses.includes(TEXT_CLASSES)).toBe(true);
    expect(textClassBuilder('outlined', false, false, false).buttonClasses.includes(TEXT_BUTTON_CLASSES)).toBe(true);
    expect(
      textClassBuilder('text', false, false, false).wrapperInputClasses.includes(TEXT_COMMON_VARIANT_CLASSES),
    ).toBe(true);
    expect(textClassBuilder('text', false, false, false).clearClasses.includes(TEXT_CLEAR_CLASSES)).toBe(true);
    expect(textClassBuilder('text', false, false, false).helperClasses.includes(TEXT_HELPER_CLASSES)).toBe(true);
    expect(textClassBuilder('text', false, false, false).inputClasses.includes(TEXT_INPUT_CLASSES)).toBe(true);
    expect(textClassBuilder('text', false, false, false).labelClasses.includes(TEXT_CLASSES)).toBe(true);
    expect(textClassBuilder('text', false, false, false).buttonClasses.includes(TEXT_BUTTON_CLASSES)).toBe(true);
  });
  it('should have the proper variant and type classes', () => {
    expect(
      textClassBuilder('outlined', false, false, false).wrapperInputClasses.includes(TEXT_VARIANT_CLASSES.outlined),
    ).toBe(true);
    expect(textClassBuilder('text', false, false, false).wrapperInputClasses.includes(TEXT_VARIANT_CLASSES.text)).toBe(
      true,
    );
  });
  it('should have the proper disabled classes', () => {
    expect(textClassBuilder('outlined', true, false, false).inputClasses.includes(TEXT_VARIANT_DISABLED_CLASSES)).toBe(
      true,
    );
    expect(textClassBuilder('outlined', true, false, false).clearClasses.includes(TEXT_VARIANT_DISABLED_CLASSES)).toBe(
      true,
    );
    expect(textClassBuilder('text', true, false, false).inputClasses.includes(TEXT_VARIANT_DISABLED_CLASSES)).toBe(
      true,
    );
    expect(textClassBuilder('text', true, false, false).clearClasses.includes(TEXT_VARIANT_DISABLED_CLASSES)).toBe(
      true,
    );
  });
  it('should have the proper error classes', () => {
    expect(
      textClassBuilder('outlined', true, true, false).inputClasses.includes(TEXT_ERROR_CLASSES.input.outlined),
    ).toBe(true);
    expect(textClassBuilder('outlined', true, true, false).labelClasses.includes(TEXT_ERROR_CLASSES.text)).toBe(true);
    expect(textClassBuilder('outlined', true, true, false).helperClasses.includes(TEXT_ERROR_CLASSES.text)).toBe(true);
    expect(textClassBuilder('text', true, true, false).inputClasses.includes(TEXT_ERROR_CLASSES.input.text)).toBe(true);
    expect(textClassBuilder('text', true, true, false).labelClasses.includes(TEXT_ERROR_CLASSES.text)).toBe(true);
    expect(textClassBuilder('text', true, true, false).helperClasses.includes(TEXT_ERROR_CLASSES.text)).toBe(true);
  });
  it('button should be hidden when you request it', () => {
    expect(textClassBuilder('outlined', false, false, true).buttonClasses.includes(TEXT_HIDE_BUTTON_CLASSES)).toBe(
      true,
    );
    expect(textClassBuilder('text', false, false, true).buttonClasses.includes(TEXT_HIDE_BUTTON_CLASSES)).toBe(true);
  });
});
