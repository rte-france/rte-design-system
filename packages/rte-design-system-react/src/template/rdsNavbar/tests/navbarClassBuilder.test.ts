/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { buildColorClass } from '@/utils/index.ts';
import {
  DEFAULT_BACKGROUND_CONFIG,
  DEFAULT_CONTENT_CONFIG,
  DEFAULT_SEPARATOR_COLOR,
  DEFAULT_TEXT_COLOR,
  DEFAULT_TWO_LETTERS_BACKGROUND,
  DEFAULT_TWO_LETTERS_TEXT,
  NAVBAR_BASE_CLASSES,
  NAVBAR_COLLAPSED_CLASSES,
  NAVBAR_CONTROLLER_BASE_CLASSES,
  NAVBAR_EXPANDED_CLASSES,
  NAVBAR_ITEM_COLLAPSED_CLASSES,
  NAVBAR_ITEM_COMMON_CLASSES,
  TWO_LETTERS_CLASSES,
  VERSIONS_CLASSES,
  navbarClassBuilder,
  navbarControllerClassBuilder,
  navbarHeaderClassBuilder,
  navbarItemClassBuilder,
} from '../navbarClassBuilder.ts';
import { TEST_LOGO_HEADER_CONFIG, TEST_TEXT_HEADER_CONFIG } from '@/tests/mocks/navbarConfig.mock.ts';
const NO_PREFIX = '';
describe('navbarClassBuilder', () => {
  it('should have the common classes', () => {
    expect(navbarClassBuilder(true)).toContain(NAVBAR_BASE_CLASSES);
    expect(navbarClassBuilder(false)).toContain(NAVBAR_BASE_CLASSES);
  });
  it('should have the default config classes when no config passed', () => {
    const DEFAULT_TEXT = buildColorClass('text', { [NO_PREFIX]: DEFAULT_TEXT_COLOR });
    const DEFAULT_BG = buildColorClass('bg', { [NO_PREFIX]: DEFAULT_CONTENT_CONFIG[NO_PREFIX] });
    const DEFAULT_BORDER = buildColorClass('border', { [NO_PREFIX]: DEFAULT_SEPARATOR_COLOR });
    expect(navbarClassBuilder(true)).toContain(DEFAULT_TEXT);
    expect(navbarClassBuilder(true)).toContain(DEFAULT_BG);
    expect(navbarClassBuilder(true)).toContain(DEFAULT_BORDER);
  });
  it('should have the proper expanded classes', () => {
    expect(navbarClassBuilder(true)).toContain(NAVBAR_EXPANDED_CLASSES);
  });
  it('should have the proper collapsed classes', () => {
    expect(navbarClassBuilder(false)).toContain(NAVBAR_COLLAPSED_CLASSES);
  });
});

describe('navbarItemClassBuilder', () => {
  it('should have the common classes', () => {
    expect(navbarItemClassBuilder(true, true)).toContain(NAVBAR_ITEM_COMMON_CLASSES);
    expect(navbarItemClassBuilder(true, false)).toContain(NAVBAR_ITEM_COMMON_CLASSES);
    expect(navbarItemClassBuilder(false, true)).toContain(NAVBAR_ITEM_COMMON_CLASSES);
    expect(navbarItemClassBuilder(false, false)).toContain(NAVBAR_ITEM_COMMON_CLASSES);
  });
  it('should have the collapsed classes if expanded is false', () => {
    expect(navbarItemClassBuilder(true, true)).not.toContain(NAVBAR_ITEM_COLLAPSED_CLASSES);
    expect(navbarItemClassBuilder(true, false)).toContain(NAVBAR_ITEM_COLLAPSED_CLASSES);
  });
  it('should have the default config classes when no config is passed', () => {
    const DEFAULT_BG = buildColorClass('bg', {
      [NO_PREFIX]: DEFAULT_BACKGROUND_CONFIG[NO_PREFIX],
      hover: DEFAULT_BACKGROUND_CONFIG.hover,
      active: DEFAULT_BACKGROUND_CONFIG.active,
    });
    const DEFAULT_HOVER_CONTENT = buildColorClass('text', {
      hover: DEFAULT_CONTENT_CONFIG.hover,
      active: DEFAULT_CONTENT_CONFIG.active,
    });
    const DEFAULT_FOCUS = buildColorClass('outline', { 'focus-visible': DEFAULT_CONTENT_CONFIG.hover });

    expect(navbarItemClassBuilder(false, true)).toContain(DEFAULT_BG);
    expect(navbarItemClassBuilder(false, true)).toContain(DEFAULT_HOVER_CONTENT);
    expect(navbarItemClassBuilder(false, true)).toContain(DEFAULT_FOCUS);
  });

  it('should have the default selected classes when no config is passed and selected is true', () => {
    const DEFAULT_SELECTED_BG = buildColorClass('bg', { ['[&]:']: DEFAULT_BACKGROUND_CONFIG['aria-selected'] });
    const DEFAULT_SELECTED_CONTENT = buildColorClass('text', { '[&]:': DEFAULT_CONTENT_CONFIG['aria-selected'] });
    expect(navbarItemClassBuilder(true, true)).toContain(DEFAULT_SELECTED_BG);
    expect(navbarItemClassBuilder(true, true)).toContain(DEFAULT_SELECTED_CONTENT);
    expect(navbarItemClassBuilder(false, true)).not.toContain(DEFAULT_SELECTED_BG);
    expect(navbarItemClassBuilder(false, true)).not.toContain(DEFAULT_SELECTED_CONTENT);
  });
});

describe('navbarControllerClassBuilder', () => {
  it('should have the common classes', () => {
    expect(navbarControllerClassBuilder(true)).toContain(NAVBAR_CONTROLLER_BASE_CLASSES);
    expect(navbarControllerClassBuilder(false)).toContain(NAVBAR_CONTROLLER_BASE_CLASSES);
  });
});

describe('navbarHeaderClassBuilder', () => {
  it('should have the two letters class if variant is text', () => {
    const DEFAULT_BACKGROUND_CLASS = buildColorClass('bg', { [NO_PREFIX]: DEFAULT_TWO_LETTERS_BACKGROUND });
    const DEFAULT_TEXT_CLASS = buildColorClass('text', { [NO_PREFIX]: DEFAULT_TWO_LETTERS_TEXT });
    expect(navbarHeaderClassBuilder(TEST_TEXT_HEADER_CONFIG).twoLettersClasses).toContain(TWO_LETTERS_CLASSES);
    expect(navbarHeaderClassBuilder(TEST_TEXT_HEADER_CONFIG).twoLettersClasses).toContain(DEFAULT_BACKGROUND_CLASS);
    expect(navbarHeaderClassBuilder(TEST_TEXT_HEADER_CONFIG).twoLettersClasses).toContain(DEFAULT_TEXT_CLASS);
  });
  it('should not have any two letters class if variant is logo', () => {
    expect(navbarHeaderClassBuilder(TEST_LOGO_HEADER_CONFIG)).to.not.haveOwnProperty('twoLettersClasses');
  });
  it('should have the proper variant classes', () => {
    expect(navbarHeaderClassBuilder(TEST_TEXT_HEADER_CONFIG).versionClasses).toContain(VERSIONS_CLASSES.text);
    expect(navbarHeaderClassBuilder(TEST_LOGO_HEADER_CONFIG).versionClasses).toContain(VERSIONS_CLASSES.logo);
  });
});
