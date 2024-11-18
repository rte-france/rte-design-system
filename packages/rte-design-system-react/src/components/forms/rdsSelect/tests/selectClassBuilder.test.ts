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
} from '../selectClassBuilder.ts';

describe('selectClassBuilder', () => {
  it('should always return the common classes', () => {
    expect(selectClassBuilder('medium', false, false, false).selectClasses).toContain(COMMON_SELECT_CLASSES);
    expect(selectClassBuilder('medium', false, false, false).selectClasses).toContain(SELECT_TEXT_CLASSES);
    expect(selectClassBuilder('medium', false, false, false).labelClasses).toContain(LABEL_CLASSES);
    expect(selectClassBuilder('medium', false, false, false).helperClasses).toContain(HELPER_CLASSES);
    expect(selectClassBuilder('medium', true, false, false).selectClasses).toContain(COMMON_SELECT_CLASSES);
    expect(selectClassBuilder('medium', true, false, false).selectClasses).toContain(SELECT_TEXT_CLASSES);
    expect(selectClassBuilder('medium', true, false, false).labelClasses).toContain(LABEL_CLASSES);
    expect(selectClassBuilder('medium', true, false, false).helperClasses).toContain(HELPER_CLASSES);
    expect(selectClassBuilder('medium', false, true, false).selectClasses).toContain(COMMON_SELECT_CLASSES);
    expect(selectClassBuilder('medium', false, true, false).selectClasses).toContain(SELECT_TEXT_CLASSES);
    expect(selectClassBuilder('medium', false, true, false).labelClasses).toContain(LABEL_CLASSES);
    expect(selectClassBuilder('medium', false, true, false).helperClasses).toContain(HELPER_CLASSES);
    expect(selectClassBuilder('medium', true, true, false).selectClasses).toContain(COMMON_SELECT_CLASSES);
    expect(selectClassBuilder('medium', true, true, false).selectClasses).toContain(SELECT_TEXT_CLASSES);
    expect(selectClassBuilder('medium', true, true, false).labelClasses).toContain(LABEL_CLASSES);
    expect(selectClassBuilder('medium', true, true, false).helperClasses).toContain(HELPER_CLASSES);
    expect(selectClassBuilder('medium', false, false, false).selectClasses).toContain(STATUS_CLASSES['enabled']);
    expect(selectClassBuilder('medium', false, false, false).toggleIconClasses).toContain(
      TOGGLE_ICON_CLASSES['enabled'],
    );
  });
  it('should return the medium size classes', () => {
    expect(selectClassBuilder('medium', false, true, false).selectClasses).toContain(SELECT_SIZE_CLASSES.medium);
  });
  it('should return the small size classes', () => {
    expect(selectClassBuilder('small', false, true, false).selectClasses).toContain(SELECT_SIZE_CLASSES.small);
  });
  it('should return the error classes if error is true', () => {
    expect(selectClassBuilder('medium', false, true, false).helperClasses).toContain(ERROR_CLASSES.helper);
    expect(selectClassBuilder('medium', false, true, false).labelClasses).toContain(ERROR_CLASSES.label);
    expect(selectClassBuilder('medium', false, true, false).selectClasses).toContain(ERROR_CLASSES.select);
  });
  it('should not return the error classes if error is false', () => {
    expect(selectClassBuilder('medium', false, false, false).helperClasses).not.toContain(ERROR_CLASSES.helper);
    expect(selectClassBuilder('medium', false, false, false).labelClasses).not.toContain(ERROR_CLASSES.label);
    expect(selectClassBuilder('medium', false, false, false).selectClasses).not.toContain(ERROR_CLASSES.select);
  });
  it('should return the disabled classes if disabled is true', () => {
    expect(selectClassBuilder('medium', true, false, false).selectClasses).toContain(STATUS_CLASSES['disabled']);
    expect(selectClassBuilder('medium', true, false, false).toggleIconClasses).toContain(
      TOGGLE_ICON_CLASSES['disabled'],
    );
  });
  it('should not return the disabled classes if disabled is false', () => {
    expect(selectClassBuilder('medium', false, false, false).selectClasses).not.toContain(STATUS_CLASSES['disabled']);
    expect(selectClassBuilder('medium', false, false, false).toggleIconClasses).not.toContain(
      TOGGLE_ICON_CLASSES['disabled'],
    );
  });
  it('should return ');
});
