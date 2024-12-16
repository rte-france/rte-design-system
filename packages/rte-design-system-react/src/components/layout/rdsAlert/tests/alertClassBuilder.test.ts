/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { TOAST_STATUS_TEXT_CLASSES } from '../../rdsToast/toastClassBuilder.ts';
import {
  ALERT_COMMON_CONTAINER_CLASSES,
  ALERT_COMMON_TEXT_CLASSES,
  ALERT_STATUS_COLOR_CLASSES,
  ALERT_STATUS_CONTAINER_CLASSES,
  alertClassBuilder,
} from '../alertClassBuilder.ts';

describe('alertClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(alertClassBuilder('info').containerClasses.includes(ALERT_COMMON_CONTAINER_CLASSES)).toBe(true);
    expect(alertClassBuilder('info').textClasses.includes(ALERT_COMMON_TEXT_CLASSES)).toBe(true);
  });

  it('should have the proper status classes', () => {
    expect(alertClassBuilder('info').containerClasses.includes(ALERT_STATUS_CONTAINER_CLASSES.info)).toBe(true);
    expect(alertClassBuilder('info').textClasses.includes(TOAST_STATUS_TEXT_CLASSES.info)).toBe(true);

    expect(alertClassBuilder('warning').containerClasses.includes(ALERT_STATUS_CONTAINER_CLASSES.warning)).toBe(true);
    expect(alertClassBuilder('warning').textClasses.includes(TOAST_STATUS_TEXT_CLASSES.warning)).toBe(true);

    expect(alertClassBuilder('error').containerClasses.includes(ALERT_STATUS_CONTAINER_CLASSES.error)).toBe(true);
    expect(alertClassBuilder('error').textClasses.includes(TOAST_STATUS_TEXT_CLASSES.error)).toBe(true);

    expect(alertClassBuilder('success').containerClasses.includes(ALERT_STATUS_CONTAINER_CLASSES.success)).toBe(true);
    expect(alertClassBuilder('success').textClasses.includes(TOAST_STATUS_TEXT_CLASSES.success)).toBe(true);
  });

  it('should have the proper status icon classes', () => {
    expect(alertClassBuilder('info').iconClasses.includes(ALERT_STATUS_COLOR_CLASSES.info)).toBe(true);
    expect(alertClassBuilder('warning').iconClasses.includes(ALERT_STATUS_COLOR_CLASSES.warning)).toBe(true);
    expect(alertClassBuilder('error').iconClasses.includes(ALERT_STATUS_COLOR_CLASSES.error)).toBe(true);
    expect(alertClassBuilder('success').iconClasses.includes(ALERT_STATUS_COLOR_CLASSES.success)).toBe(true);
  });
});
