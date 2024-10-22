/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  CONTAINER_SIZE_CLASSES,
  ERROR_CLASSES,
  HELPER_TEXT_CLASSES,
  INPUT_WRAPPER_ACTIVE_CLASSES,
  INPUT_WRAPPER_ACTIVE_DRAG_CLASSES,
  INPUT_WRAPPER_CLASSES,
  INPUT_WRAPPER_DISABLED_CLASSES,
  INPUT_WRAPPER_FOCUS_CLASSES,
  INPUT_WRAPPER_HOVER_CLASSES,
  INPUT_WRAPPER_SIZE_CLASSES,
  fileInputClassBuilder,
} from '../fileInputClassBuilder';

describe('fileInputClassBuilder function', () => {
  it('should have the default classes', () => {
    expect(
      fileInputClassBuilder('medium', false, false, false).inputWrapperClasses.includes(INPUT_WRAPPER_CLASSES),
    ).toBe(true);
    expect(
      fileInputClassBuilder('medium', false, false, false).inputWrapperClasses.includes(INPUT_WRAPPER_HOVER_CLASSES),
    ).toBe(true);
    expect(
      fileInputClassBuilder('medium', false, false, false).inputWrapperClasses.includes(INPUT_WRAPPER_FOCUS_CLASSES),
    ).toBe(true);
    expect(
      fileInputClassBuilder('medium', false, false, false).inputWrapperClasses.includes(INPUT_WRAPPER_ACTIVE_CLASSES),
    ).toBe(true);
    expect(fileInputClassBuilder('medium', false, false, false).helperTextClasses.includes(HELPER_TEXT_CLASSES)).toBe(
      true,
    );
  });

  it('should have the proper disabled classes', () => {
    expect(
      fileInputClassBuilder('medium', true, false, false).inputWrapperClasses.includes(INPUT_WRAPPER_DISABLED_CLASSES),
    ).toBe(true);
    expect(
      fileInputClassBuilder('medium', true, false, false).inputWrapperClasses.includes(INPUT_WRAPPER_HOVER_CLASSES),
    ).not.toBe(true);
    expect(
      fileInputClassBuilder('medium', true, false, false).inputWrapperClasses.includes(INPUT_WRAPPER_FOCUS_CLASSES),
    ).not.toBe(true);
    expect(
      fileInputClassBuilder('medium', true, false, false).inputWrapperClasses.includes(INPUT_WRAPPER_ACTIVE_CLASSES),
    ).not.toBe(true);
  });

  it('should have the proper error classes', () => {
    expect(
      fileInputClassBuilder('medium', false, true, false).inputWrapperClasses.includes(ERROR_CLASSES.inputWrapper),
    ).toBe(true);
    expect(
      fileInputClassBuilder('medium', false, true, false).helperTextClasses.includes(ERROR_CLASSES.helperText),
    ).toBe(true);
  });

  it('should have the proper dragActive classes', () => {
    expect(
      fileInputClassBuilder('medium', false, false, true).inputWrapperClasses.includes(
        INPUT_WRAPPER_ACTIVE_DRAG_CLASSES,
      ),
    ).toBe(true);
  });

  it('should have the proper size classes', () => {
    expect(
      fileInputClassBuilder('small', false, false, false).inputWrapperClasses.includes(CONTAINER_SIZE_CLASSES.small),
    ).toBe(true);
    expect(
      fileInputClassBuilder('small', false, false, false).inputWrapperClasses.includes(
        INPUT_WRAPPER_SIZE_CLASSES.small,
      ),
    ).toBe(true);
    expect(
      fileInputClassBuilder('medium', false, false, false).inputWrapperClasses.includes(CONTAINER_SIZE_CLASSES.medium),
    ).toBe(true);
    expect(
      fileInputClassBuilder('medium', false, false, false).inputWrapperClasses.includes(
        INPUT_WRAPPER_SIZE_CLASSES.medium,
      ),
    ).toBe(true);
  });
});
