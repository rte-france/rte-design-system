/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  COMMON_SELECT_CLASSES,
  ERROR_CLASSES,
  HELPER_CLASSES,
  LABEL_CLASSES,
  SELECT_SIZE_CLASSES,
  SELECT_TEXT_CLASSES,
  STATUS_CLASSES,
  TOGGLE_ICON_CLASSES,
  selectClassBuilder,
} from '../selectClassBuilder';

describe('selectClassBuilder', () => {
  it('should always return the common classes', () => {
    expect(selectClassBuilder('medium', false, false, false).selectClasses.includes(COMMON_SELECT_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', false, false, false).selectClasses.includes(SELECT_TEXT_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', false, false, false).labelClasses.includes(LABEL_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', false, false, false).helperClasses.includes(HELPER_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', true, false, false).selectClasses.includes(COMMON_SELECT_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', true, false, false).selectClasses.includes(SELECT_TEXT_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', true, false, false).labelClasses.includes(LABEL_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', true, false, false).helperClasses.includes(HELPER_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', false, true, false).selectClasses.includes(COMMON_SELECT_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', false, true, false).selectClasses.includes(SELECT_TEXT_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', false, true, false).labelClasses.includes(LABEL_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', false, true, false).helperClasses.includes(HELPER_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', true, true, false).selectClasses.includes(COMMON_SELECT_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', true, true, false).selectClasses.includes(SELECT_TEXT_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', true, true, false).labelClasses.includes(LABEL_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', true, true, false).helperClasses.includes(HELPER_CLASSES)).toBe(true);
    expect(selectClassBuilder('medium', false, false, false).selectClasses.includes(STATUS_CLASSES['enabled'])).toBe(
      true,
    );
    expect(
      selectClassBuilder('medium', false, false, false).toggleIconClasses.includes(TOGGLE_ICON_CLASSES['enabled']),
    ).toBe(true);
  });
  it('should return the medium size classes', () => {
    expect(selectClassBuilder('medium', false, true, false).selectClasses.includes(SELECT_SIZE_CLASSES.medium)).toBe(
      true,
    );
  });
  it('should return the small size classes', () => {
    expect(selectClassBuilder('small', false, true, false).selectClasses.includes(SELECT_SIZE_CLASSES.small)).toBe(
      true,
    );
  });
  it('should return the error classes if error is true', () => {
    expect(selectClassBuilder('medium', false, true, false).helperClasses.includes(ERROR_CLASSES.helper)).toBe(true);
    expect(selectClassBuilder('medium', false, true, false).labelClasses.includes(ERROR_CLASSES.label)).toBe(true);
    expect(selectClassBuilder('medium', false, true, false).selectClasses.includes(ERROR_CLASSES.select)).toBe(true);
  });
  it('should not return the error classes if error is false', () => {
    expect(selectClassBuilder('medium', false, false, false).helperClasses.includes(ERROR_CLASSES.helper)).toBe(false);
    expect(selectClassBuilder('medium', false, false, false).labelClasses.includes(ERROR_CLASSES.label)).toBe(false);
    expect(selectClassBuilder('medium', false, false, false).selectClasses.includes(ERROR_CLASSES.select)).toBe(false);
  });
  it('should return the disabled classes if disabled is true', () => {
    expect(selectClassBuilder('medium', true, false, false).selectClasses.includes(STATUS_CLASSES['disabled'])).toBe(
      true,
    );
    expect(
      selectClassBuilder('medium', true, false, false).toggleIconClasses.includes(TOGGLE_ICON_CLASSES['disabled']),
    ).toBe(true);
  });
  it('should not return the disabled classes if disabled is false', () => {
    expect(selectClassBuilder('medium', false, false, false).selectClasses.includes(STATUS_CLASSES['disabled'])).toBe(
      false,
    );
    expect(
      selectClassBuilder('medium', false, false, false).toggleIconClasses.includes(TOGGLE_ICON_CLASSES['disabled']),
    ).toBe(false);
  });
  it('should return ');
});
