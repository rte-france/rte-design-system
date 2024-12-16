/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  COMMON_SELECT_CLASSES,
  SELECT_ERROR_CLASSES,
  SELECT_HELPER_CLASSES,
  SELECT_LABEL_CLASSES,
  SELECT_SIZE_CLASSES,
  SELECT_TEXT_CLASSES,
  SELECT_STATUS_CLASSES,
  SELECT_TOGGLE_ICON_CLASSES,
  selectClassBuilder,
} from '../selectClassBuilder.ts';

describe('selectClassBuilder', () => {
  it('should always return the common classes', () => {
    expect(selectClassBuilder('medium', false, false, false).selectClasses).toContain(COMMON_SELECT_CLASSES);
    expect(selectClassBuilder('medium', false, false, false).selectClasses).toContain(SELECT_TEXT_CLASSES);
    expect(selectClassBuilder('medium', false, false, false).labelClasses).toContain(SELECT_LABEL_CLASSES);
    expect(selectClassBuilder('medium', false, false, false).helperClasses).toContain(SELECT_HELPER_CLASSES);
    expect(selectClassBuilder('medium', true, false, false).selectClasses).toContain(COMMON_SELECT_CLASSES);
    expect(selectClassBuilder('medium', true, false, false).selectClasses).toContain(SELECT_TEXT_CLASSES);
    expect(selectClassBuilder('medium', true, false, false).labelClasses).toContain(SELECT_LABEL_CLASSES);
    expect(selectClassBuilder('medium', true, false, false).helperClasses).toContain(SELECT_HELPER_CLASSES);
    expect(selectClassBuilder('medium', false, true, false).selectClasses).toContain(COMMON_SELECT_CLASSES);
    expect(selectClassBuilder('medium', false, true, false).selectClasses).toContain(SELECT_TEXT_CLASSES);
    expect(selectClassBuilder('medium', false, true, false).labelClasses).toContain(SELECT_LABEL_CLASSES);
    expect(selectClassBuilder('medium', false, true, false).helperClasses).toContain(SELECT_HELPER_CLASSES);
    expect(selectClassBuilder('medium', true, true, false).selectClasses).toContain(COMMON_SELECT_CLASSES);
    expect(selectClassBuilder('medium', true, true, false).selectClasses).toContain(SELECT_TEXT_CLASSES);
    expect(selectClassBuilder('medium', true, true, false).labelClasses).toContain(SELECT_LABEL_CLASSES);
    expect(selectClassBuilder('medium', true, true, false).helperClasses).toContain(SELECT_HELPER_CLASSES);
    expect(selectClassBuilder('medium', false, false, false).selectClasses).toContain(SELECT_STATUS_CLASSES['enabled']);
    expect(selectClassBuilder('medium', false, false, false).toggleIconClasses).toContain(
      SELECT_TOGGLE_ICON_CLASSES['enabled'],
    );
  });
  it('should return the medium size classes', () => {
    expect(selectClassBuilder('medium', false, true, false).selectClasses).toContain(SELECT_SIZE_CLASSES.medium);
  });
  it('should return the small size classes', () => {
    expect(selectClassBuilder('small', false, true, false).selectClasses).toContain(SELECT_SIZE_CLASSES.small);
  });
  it('should return the error classes if error is true', () => {
    expect(selectClassBuilder('medium', false, true, false).helperClasses).toContain(SELECT_ERROR_CLASSES.helper);
    expect(selectClassBuilder('medium', false, true, false).labelClasses).toContain(SELECT_ERROR_CLASSES.label);
    expect(selectClassBuilder('medium', false, true, false).selectClasses).toContain(SELECT_ERROR_CLASSES.select);
  });
  it('should not return the error classes if error is false', () => {
    expect(selectClassBuilder('medium', false, false, false).helperClasses).not.toContain(SELECT_ERROR_CLASSES.helper);
    expect(selectClassBuilder('medium', false, false, false).labelClasses).not.toContain(SELECT_ERROR_CLASSES.label);
    expect(selectClassBuilder('medium', false, false, false).selectClasses).not.toContain(SELECT_ERROR_CLASSES.select);
  });
  it('should return the disabled classes if disabled is true', () => {
    expect(selectClassBuilder('medium', true, false, false).selectClasses).toContain(SELECT_STATUS_CLASSES['disabled']);
    expect(selectClassBuilder('medium', true, false, false).toggleIconClasses).toContain(
      SELECT_TOGGLE_ICON_CLASSES['disabled'],
    );
  });
  it('should not return the disabled classes if disabled is false', () => {
    expect(selectClassBuilder('medium', false, false, false).selectClasses).not.toContain(
      SELECT_STATUS_CLASSES['disabled'],
    );
    expect(selectClassBuilder('medium', false, false, false).toggleIconClasses).not.toContain(
      SELECT_TOGGLE_ICON_CLASSES['disabled'],
    );
  });
  it('should return ');
});
