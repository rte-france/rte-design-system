/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  BUTTON_COMMON_CLASSES,
  BUTTON_FOCUS_CLASSES,
  BUTTON_HOVER_CLASSES,
  BUTTON_KEYBOARD_ACTIVE_CLASSES,
  BUTTON_SIZE_CLASSES,
  breadcrumbItemClassBuilder,
} from '../breadcrumItemClassBuilder';

describe('breadcrumbItemClassBuilder function', () => {
  it('should return the default classes', () => {
    expect(breadcrumbItemClassBuilder(false).includes(BUTTON_COMMON_CLASSES)).toBe(true);
    expect(breadcrumbItemClassBuilder(false).includes(BUTTON_FOCUS_CLASSES)).toBe(true);
    expect(breadcrumbItemClassBuilder(false).includes(BUTTON_HOVER_CLASSES)).toBe(true);
    expect(breadcrumbItemClassBuilder(false).includes(BUTTON_SIZE_CLASSES)).toBe(true);
  });

  it('should return the expext classes according to the keyboard active status', () => {
    expect(breadcrumbItemClassBuilder(false).includes(BUTTON_KEYBOARD_ACTIVE_CLASSES)).toBe(false);
    expect(breadcrumbItemClassBuilder(true).includes(BUTTON_KEYBOARD_ACTIVE_CLASSES)).toBe(true);
  });
});
