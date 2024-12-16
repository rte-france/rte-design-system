/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import radioButtonClassBuilder, {
  RADIO_COMMON_CONTAINER_CLASSES,
  RADIO_COMMON_LABEL_CONTAINER_CLASSES,
  RADIO_COMMON_TEXT_CLASSES,
  RADIO_DISABLED_BORDER_CLASSES,
  DISABLED_CHECK_CLASSES,
  RADIO_DISABLED_LABEL_CONTAINER_CLASSES,
  RADIO_DISABLED_TEXT_CLASSES,
  RADIO_ENABLED_BORDER_CLASSES,
  RADIO_ENABLED_CHECK_CLASSES,
  RADIO_CIRCLE_CLASSES,
} from '../radioButtonClassBuilder.ts';

describe('radioButtonClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(radioButtonClassBuilder(false).labelContainerClasses.includes(RADIO_COMMON_LABEL_CONTAINER_CLASSES)).toBe(
      true,
    );
    expect(radioButtonClassBuilder(false).containerClasses.includes(RADIO_COMMON_CONTAINER_CLASSES)).toBe(true);
    expect(radioButtonClassBuilder(false).radioCircleClasses.includes(RADIO_CIRCLE_CLASSES)).toBe(true);
    expect(radioButtonClassBuilder(false).textClasses.includes(RADIO_COMMON_TEXT_CLASSES)).toBe(true);
  });

  it('should have the enabled classes', () => {
    expect(radioButtonClassBuilder(false).containerClasses.includes(RADIO_ENABLED_BORDER_CLASSES)).toBe(true);
    expect(radioButtonClassBuilder(false).containerClasses.includes(RADIO_ENABLED_CHECK_CLASSES)).toBe(true);
  });

  it('should have the disabled classes', () => {
    expect(radioButtonClassBuilder(true).labelContainerClasses.includes(RADIO_DISABLED_LABEL_CONTAINER_CLASSES)).toBe(
      true,
    );
    expect(radioButtonClassBuilder(true).containerClasses.includes(RADIO_DISABLED_BORDER_CLASSES)).toBe(true);
    expect(radioButtonClassBuilder(true).containerClasses.includes(DISABLED_CHECK_CLASSES)).toBe(true);
    expect(radioButtonClassBuilder(true).textClasses.includes(RADIO_DISABLED_TEXT_CLASSES)).toBe(true);
  });
});
