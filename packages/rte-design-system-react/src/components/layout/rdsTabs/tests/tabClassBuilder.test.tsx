/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId } from '@/utils/index.ts';
import {
  TAB_ACTIVE_CLASSES,
  TAB_BORDER_CLASSES,
  TAB_COMMON_BORDER_CLASSES,
  TAB_COMMON_CONTENT_CONTAINER_CLASSES,
  COMMON_LIST_BUTTON_CLASSES,
  TAB_CONTENT_CONTAINER_CLASSES,
  TAB_DISABLED_CLASSES,
  TAB_ENABLED_CLASSES,
  TAB_KEYBOARD_ACTIVE_CLASSES,
  TAB_KEYBOARD_BORDER_ACTIVE_CLASSES,
  TAB_PADDING_X,
  TAB_PADDING_Y,
  PRIMARY_BORDER_BUTTON_CLASSES,
  tabItemClassBuilder,
  tabListClassBuilder,
} from '../tabClassBuilder.tsx';

describe('tabListClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(tabListClassBuilder('primary', 0).buttonClasses.left.includes(COMMON_LIST_BUTTON_CLASSES)).toBe(true);
    expect(tabListClassBuilder('primary', 0).buttonClasses.right.includes(COMMON_LIST_BUTTON_CLASSES)).toBe(true);

    expect(tabListClassBuilder('secondary', 0).buttonClasses.left.includes(COMMON_LIST_BUTTON_CLASSES)).toBe(true);
    expect(tabListClassBuilder('secondary', 0).buttonClasses.right.includes(COMMON_LIST_BUTTON_CLASSES)).toBe(true);
  });

  it('should have the primary border button classes', () => {
    expect(tabListClassBuilder('primary', 0).buttonClasses.left.includes(PRIMARY_BORDER_BUTTON_CLASSES)).toBe(true);
    expect(tabListClassBuilder('primary', 0).buttonClasses.right.includes(PRIMARY_BORDER_BUTTON_CLASSES)).toBe(true);
  });

  it('should have the left button visibility classes', () => {
    expect(tabListClassBuilder('primary', 0, 200, 300).buttonClasses.left.includes('hidden')).toBe(true);
    expect(tabListClassBuilder('secondary', 0, 200, 300).buttonClasses.left.includes('hidden')).toBe(true);

    expect(tabListClassBuilder('primary', 100, 200, 300).buttonClasses.left.includes('hidden')).toBe(false);
    expect(tabListClassBuilder('secondary', 100, 200, 300).buttonClasses.left.includes('hidden')).toBe(false);
  });
  it('should have the right button visibility classes', () => {
    expect(tabListClassBuilder('primary', 200, 200, 300).buttonClasses.right.includes('hidden')).toBe(true);
    expect(tabListClassBuilder('secondary', 200, 200, 300).buttonClasses.right.includes('hidden')).toBe(true);

    expect(tabListClassBuilder('primary', 0, 200, 300).buttonClasses.right.includes('hidden')).toBe(false);
    expect(tabListClassBuilder('secondary', 0, 200, 300).buttonClasses.right.includes('hidden')).toBe(false);
  });
});

describe('tabItemClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(
      tabItemClassBuilder('primary', false).contentContainerClasses.includes(TAB_COMMON_CONTENT_CONTAINER_CLASSES),
    ).toBe(true);
    expect(
      tabItemClassBuilder('secondary', false).contentContainerClasses.includes(TAB_COMMON_CONTENT_CONTAINER_CLASSES),
    ).toBe(true);
  });

  it('should have the proper border and rounded classes', () => {
    expect(
      tabItemClassBuilder('primary', false).contentContainerClasses.includes(TAB_CONTENT_CONTAINER_CLASSES.primary),
    ).toBe(true);
    expect(
      tabItemClassBuilder('secondary', false).contentContainerClasses.includes(TAB_CONTENT_CONTAINER_CLASSES.secondary),
    ).toBe(true);

    expect(tabItemClassBuilder('primary', false).borderClasses.includes(TAB_COMMON_BORDER_CLASSES)).toBe(true);
  });

  it('should have the proper primary padding classes', () => {
    expect(tabItemClassBuilder('primary', false).contentContainerClasses.includes(TAB_PADDING_X.paddingWithText)).toBe(
      true,
    );
    expect(
      tabItemClassBuilder('primary', false, RdsIconId.Add).contentContainerClasses.includes(
        TAB_PADDING_X.paddingWithIcon,
      ),
    ).toBe(true);
    expect(tabItemClassBuilder('primary', false).contentContainerClasses.includes(TAB_PADDING_Y.primary)).toBe(true);
  });

  it('should have the proper secondary padding classes', () => {
    expect(
      tabItemClassBuilder('secondary', false).contentContainerClasses.includes(TAB_PADDING_X.paddingWithText),
    ).toBe(true);
    expect(
      tabItemClassBuilder('secondary', false, RdsIconId.Add).contentContainerClasses.includes(
        TAB_PADDING_X.paddingWithIcon,
      ),
    ).toBe(true);
    expect(tabItemClassBuilder('secondary', false).contentContainerClasses.includes(TAB_PADDING_Y.secondary)).toBe(
      true,
    );
  });

  it('should have the proper active classes', () => {
    expect(
      tabItemClassBuilder('primary', false, undefined, true).contentContainerClasses.includes(
        TAB_ACTIVE_CLASSES.active,
      ),
    ).toBe(true);
    expect(
      tabItemClassBuilder('primary', false, undefined, true).borderClasses.includes(TAB_BORDER_CLASSES.active),
    ).toBe(true);

    expect(
      tabItemClassBuilder('primary', false, undefined, false).contentContainerClasses.includes(
        TAB_ACTIVE_CLASSES.inactive,
      ),
    ).toBe(true);
    expect(
      tabItemClassBuilder('primary', false, undefined, false).borderClasses.includes(TAB_BORDER_CLASSES.inactive),
    ).toBe(true);

    expect(
      tabItemClassBuilder('secondary', false, undefined, true).contentContainerClasses.includes(
        TAB_ACTIVE_CLASSES.active,
      ),
    ).toBe(true);
    expect(
      tabItemClassBuilder('secondary', false, undefined, false).contentContainerClasses.includes(
        TAB_ACTIVE_CLASSES.inactive,
      ),
    ).toBe(true);
  });
  it('should have the proper keyboad active classes', () => {
    expect(tabItemClassBuilder('primary', true).contentContainerClasses.includes(TAB_KEYBOARD_ACTIVE_CLASSES)).toBe(
      true,
    );
    expect(tabItemClassBuilder('secondary', true).contentContainerClasses.includes(TAB_KEYBOARD_ACTIVE_CLASSES)).toBe(
      true,
    );
    expect(tabItemClassBuilder('primary', true).borderClasses.includes(TAB_KEYBOARD_BORDER_ACTIVE_CLASSES)).toBe(true);

    expect(tabItemClassBuilder('primary', false).contentContainerClasses.includes(TAB_KEYBOARD_ACTIVE_CLASSES)).toBe(
      false,
    );
    expect(tabItemClassBuilder('secondary', false).contentContainerClasses.includes(TAB_KEYBOARD_ACTIVE_CLASSES)).toBe(
      false,
    );
    expect(tabItemClassBuilder('primary', false).borderClasses.includes(` ${TAB_KEYBOARD_BORDER_ACTIVE_CLASSES}`)).toBe(
      false,
    );
  });

  it('should have the proper disabled classes', () => {
    expect(
      tabItemClassBuilder('primary', true, undefined, undefined, true).contentContainerClasses.includes(
        TAB_DISABLED_CLASSES,
      ),
    ).toBe(true);
    expect(
      tabItemClassBuilder('secondary', true, undefined, undefined, true).contentContainerClasses.includes(
        TAB_DISABLED_CLASSES,
      ),
    ).toBe(true);
    expect(
      tabItemClassBuilder('primary', true, undefined, undefined, true).borderClasses.includes(
        ` ${TAB_BORDER_CLASSES.disabled}`,
      ),
    ).toBe(true);

    expect(
      tabItemClassBuilder('primary', true, undefined, undefined, true).contentContainerClasses.includes(
        TAB_ENABLED_CLASSES,
      ),
    ).toBe(false);
    expect(
      tabItemClassBuilder('secondary', true, undefined, undefined, true).contentContainerClasses.includes(
        TAB_ENABLED_CLASSES,
      ),
    ).toBe(false);
    expect(
      tabItemClassBuilder('primary', true, undefined, undefined, true).borderClasses.includes(
        ` ${TAB_BORDER_CLASSES.inactive}`,
      ),
    ).toBe(false);
  });
});
