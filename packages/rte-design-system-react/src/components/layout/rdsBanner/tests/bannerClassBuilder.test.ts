/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  BANNER_COMMON_CONTAINER_CLASSES,
  BANNER_COMMON_TEXT_CLASSES,
  BANNER_STATUS_COLOR_CLASSES,
  BANNER_STATUS_CONTAINER_CLASSES,
  bannerClassBuilder,
} from '../bannerClassBuilder.ts';

describe('bannerClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(bannerClassBuilder('info').containerClasses.includes(BANNER_COMMON_CONTAINER_CLASSES)).toBe(true);
    expect(bannerClassBuilder('info').textClasses.includes(BANNER_COMMON_TEXT_CLASSES)).toBe(true);
  });

  it('should have the proper status classes', () => {
    expect(bannerClassBuilder('info').containerClasses.includes(BANNER_STATUS_CONTAINER_CLASSES.info)).toBe(true);
    expect(bannerClassBuilder('info').textClasses.includes(BANNER_STATUS_COLOR_CLASSES.info)).toBe(true);

    expect(bannerClassBuilder('warning').containerClasses.includes(BANNER_STATUS_CONTAINER_CLASSES.warning)).toBe(true);
    expect(bannerClassBuilder('warning').textClasses.includes(BANNER_STATUS_COLOR_CLASSES.warning)).toBe(true);

    expect(bannerClassBuilder('error').containerClasses.includes(BANNER_STATUS_CONTAINER_CLASSES.error)).toBe(true);
    expect(bannerClassBuilder('error').textClasses.includes(BANNER_STATUS_COLOR_CLASSES.error)).toBe(true);

    expect(bannerClassBuilder('success').containerClasses.includes(BANNER_STATUS_CONTAINER_CLASSES.success)).toBe(true);
    expect(bannerClassBuilder('success').textClasses.includes(BANNER_STATUS_COLOR_CLASSES.success)).toBe(true);
  });

  it('should have the proper status icon classes', () => {
    expect(bannerClassBuilder('info').iconClasses.includes(BANNER_STATUS_COLOR_CLASSES.info)).toBe(true);
    expect(bannerClassBuilder('warning').iconClasses.includes(BANNER_STATUS_COLOR_CLASSES.warning)).toBe(true);
    expect(bannerClassBuilder('error').iconClasses.includes(BANNER_STATUS_COLOR_CLASSES.error)).toBe(true);
    expect(bannerClassBuilder('success').iconClasses.includes(BANNER_STATUS_COLOR_CLASSES.success)).toBe(true);
  });
});
