/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  ACTIVE_BUTTON_CLASSSES,
  COMMON_BUTTON_CLASSES,
  COMMON_DIVIDER_CLASSES,
  COMMON_FIELDSET_CLASSES,
  DISABLED_BUTTON_CLASSES,
  DISABLED_CHECKED_BUTTON_CLASSES,
  ENABLED_BUTTON_CLASSES,
  ENABLED_CHECKED_BUTTON_CLASSES,
  FOCUS_FIELDSET_CLASSES,
  HOVER_BUTTON_CLASSSES,
  INPUT_CLASSES,
  TEXT_CLASSES,
  toggleClassBuilder,
} from '../toggleClassBuilder.ts';

describe('toggleClassBuilder function', () => {
  it('should always have the common classes', () => {
    const toggleClasses = toggleClassBuilder(false, false);
    expect(toggleClasses.fieldsetClasses.includes(COMMON_FIELDSET_CLASSES)).toBe(true);
    expect(toggleClasses.inputClasses.includes(INPUT_CLASSES)).toBe(true);
    expect(toggleClasses.buttonClasses.includes(COMMON_BUTTON_CLASSES)).toBe(true);
    expect(toggleClasses.dividerClasses.includes(COMMON_DIVIDER_CLASSES)).toBe(true);
    expect(toggleClasses.textClasses.includes(TEXT_CLASSES)).toBe(true);
  });

  it('should have the focus classes', () => {
    expect(toggleClassBuilder(true, false).fieldsetClasses.includes(FOCUS_FIELDSET_CLASSES)).toBe(true);
  });

  it('should have the enabled classes', () => {
    const enabledToggleClasses = toggleClassBuilder(false, false);
    expect(enabledToggleClasses.buttonClasses.includes(ENABLED_BUTTON_CLASSES)).toBe(true);
    expect(enabledToggleClasses.buttonClasses.includes(ENABLED_CHECKED_BUTTON_CLASSES)).toBe(true);
    expect(enabledToggleClasses.buttonClasses.includes(HOVER_BUTTON_CLASSSES)).toBe(true);
    expect(enabledToggleClasses.buttonClasses.includes(ACTIVE_BUTTON_CLASSSES)).toBe(true);
  });

  it('should have the enabled classes', () => {
    const disabledToggleClasses = toggleClassBuilder(false, true);
    expect(disabledToggleClasses.buttonClasses.includes(DISABLED_BUTTON_CLASSES)).toBe(true);
    expect(disabledToggleClasses.buttonClasses.includes(DISABLED_CHECKED_BUTTON_CLASSES)).toBe(true);
    expect(disabledToggleClasses.buttonClasses.includes(HOVER_BUTTON_CLASSSES)).toBe(false);
    expect(disabledToggleClasses.buttonClasses.includes(ACTIVE_BUTTON_CLASSSES)).toBe(false);
  });

  it('should have the disabled classes', () => {});
});
