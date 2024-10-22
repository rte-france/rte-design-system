/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  COMMON_HELPER_TEXT_CLASSES,
  COMMON_SLIDER_CLASSES,
  CONTAINER_CLASSES,
  DEFAULT_STATE_VARIANT_CLASSES,
  DISABLED_STATE_VARIANT_CLASSES,
  ERROR_STATE_VARIANT_CLASSES,
  FOCUS_THUMB_CLASSES,
  READONLY_STATE_VARIANT_CLASSES,
  sliderClassBuilder,
} from '../sliderClassBuilder';

const TEST_MIN = 12;
const TEST_VALUE = 22;
const TEST_MAX = 36;

describe('sliderClassBuilder function', () => {
  it('should return the commons classes', () => {
    const classes = sliderClassBuilder(false);

    expect(classes.containerClasses.includes(CONTAINER_CLASSES)).toBe(true);
    expect(classes.sliderClasses.includes(COMMON_SLIDER_CLASSES)).toBe(true);
    expect(classes.helperTextClasses.includes(COMMON_HELPER_TEXT_CLASSES)).toBe(true);
  });

  it('should return default classes', () => {
    const classes = sliderClassBuilder(false);

    expect(classes.sliderClasses.includes(DEFAULT_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.sliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(true);
  });

  it('should return disabled classes', () => {
    const classes = sliderClassBuilder(false, false, true);

    expect(classes.sliderClasses.includes(DISABLED_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.sliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(false);
  });

  it('should return readonly classes', () => {
    const classes = sliderClassBuilder(true);

    expect(classes.sliderClasses.includes(READONLY_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.sliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(false);
  });

  it('should return error classes', () => {
    const classes = sliderClassBuilder(false, true);

    expect(classes.sliderClasses.includes(ERROR_STATE_VARIANT_CLASSES)).toBe(true);
  });

  it('should return the expected linear gradiant styles', () => {
    const trackBackgroundStyle = sliderClassBuilder(false, false, false, TEST_MIN, TEST_MAX, TEST_VALUE).styles
      .background;

    expect(trackBackgroundStyle.includes((((TEST_VALUE - TEST_MIN) / (TEST_MAX - TEST_MIN)) * 100).toFixed(2)));
  });
});
