/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  COMMON_HELPER_TEXT_CLASSES,
  CONTAINER_CLASSES,
  DEFAULT_STATE_VARIANT_CLASSES,
  DISABLED_STATE_VARIANT_CLASSES,
  ERROR_STATE_VARIANT_CLASSES,
  FOCUS_THUMB_CLASSES,
  NUMBER_CONTAINER_CLASSES,
  RANGE_CONTAINER_CLASSES,
  READONLY_STATE_VARIANT_CLASSES,
  SLIDER_CLASSES,
  dualSliderClassBuilder,
} from '../dualSliderClassBuilder';

const TEST_MIN = 12;
const TEST_MIN_VALUE = 22;
const TEST_MAX = 36;
const TEST_MAX_VALUE = 31;

describe('dualSliderClassBuilder function', () => {
  it('should return the commons classes', () => {
    const classes = dualSliderClassBuilder(false);

    expect(classes.minSliderClasses.includes(SLIDER_CLASSES)).toBe(true);
    expect(classes.maxSliderClasses.includes(SLIDER_CLASSES)).toBe(true);
    expect(classes.containerClasses.includes(CONTAINER_CLASSES)).toBe(true);
    expect(classes.numberContainerClasses.includes(NUMBER_CONTAINER_CLASSES)).toBe(true);
    expect(classes.sliderContainerClasses.includes(RANGE_CONTAINER_CLASSES)).toBe(true);
    expect(classes.helperTextClasses.includes(COMMON_HELPER_TEXT_CLASSES)).toBe(true);
  });

  it('should return default classes', () => {
    const classes = dualSliderClassBuilder(false);

    expect(classes.minSliderClasses.includes(DEFAULT_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.maxSliderClasses.includes(DEFAULT_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.minSliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(true);
    expect(classes.maxSliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(true);
  });

  it('should return disabled classes', () => {
    const classes = dualSliderClassBuilder(false, false, true);

    expect(classes.minSliderClasses.includes(DISABLED_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.maxSliderClasses.includes(DISABLED_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.minSliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(false);
    expect(classes.maxSliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(false);
  });

  it('should return readonly classes', () => {
    const classes = dualSliderClassBuilder(false, true);

    expect(classes.minSliderClasses.includes(READONLY_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.maxSliderClasses.includes(READONLY_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.minSliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(false);
    expect(classes.maxSliderClasses.includes(FOCUS_THUMB_CLASSES)).toBe(false);
  });

  it('should return error classes', () => {
    const classes = dualSliderClassBuilder(false, false, false, true);

    expect(classes.minSliderClasses.includes(ERROR_STATE_VARIANT_CLASSES)).toBe(true);
    expect(classes.maxSliderClasses.includes(ERROR_STATE_VARIANT_CLASSES)).toBe(true);
  });

  it('should return the expected linear gradiant styles', () => {
    const trackBackgroundStyle = dualSliderClassBuilder(
      false,
      false,
      false,
      false,
      TEST_MIN,
      TEST_MAX,
      TEST_MIN_VALUE,
      TEST_MAX_VALUE,
    ).styles.background;

    expect(trackBackgroundStyle.includes((((TEST_MIN_VALUE - TEST_MIN) / (TEST_MAX - TEST_MIN)) * 100).toFixed(2)));
    expect(trackBackgroundStyle.includes((((TEST_MAX_VALUE - TEST_MIN) / (TEST_MAX - TEST_MIN)) * 100).toFixed(2)));
  });

  it('should return the expected z-index classe for foreground the first input', () => {
    const classes = dualSliderClassBuilder(true);

    expect(classes.minSliderClasses.includes('z-10')).toBe(true);
  });
});
