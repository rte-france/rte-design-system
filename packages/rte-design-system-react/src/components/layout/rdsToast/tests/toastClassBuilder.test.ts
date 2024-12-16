/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  TOAST_COMMON_CONTAINER_CLASSES,
  TOAST_COMMON_TEXT_CLASSES,
  TOAST_STATUS_CONTAINER_CLASSES,
  TOAST_STATUS_TEXT_CLASSES,
  toastClassBuilder,
} from '../toastClassBuilder.ts';

describe('toastClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(toastClassBuilder('info', false).containerClasses.includes(TOAST_COMMON_CONTAINER_CLASSES)).toBe(true);
    expect(toastClassBuilder('info', false).textClasses.includes(TOAST_COMMON_TEXT_CLASSES)).toBe(true);
  });

  it('should have the proper status classes', () => {
    expect(toastClassBuilder('info', false).containerClasses.includes(TOAST_STATUS_CONTAINER_CLASSES.info)).toBe(true);
    expect(toastClassBuilder('info', false).textClasses.includes(TOAST_STATUS_TEXT_CLASSES.info)).toBe(true);
    expect(toastClassBuilder('info', false).iconClasses.includes(TOAST_STATUS_TEXT_CLASSES.info)).toBe(true);

    expect(toastClassBuilder('warning', false).containerClasses.includes(TOAST_STATUS_CONTAINER_CLASSES.warning)).toBe(
      true,
    );
    expect(toastClassBuilder('warning', false).textClasses.includes(TOAST_STATUS_TEXT_CLASSES.warning)).toBe(true);
    expect(toastClassBuilder('warning', false).iconClasses.includes(TOAST_STATUS_TEXT_CLASSES.warning)).toBe(true);

    expect(toastClassBuilder('error', false).containerClasses.includes(TOAST_STATUS_CONTAINER_CLASSES.error)).toBe(
      true,
    );
    expect(toastClassBuilder('error', false).textClasses.includes(TOAST_STATUS_TEXT_CLASSES.error)).toBe(true);
    expect(toastClassBuilder('error', false).iconClasses.includes(TOAST_STATUS_TEXT_CLASSES.error)).toBe(true);
  });
});
