/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import modalTitleClassBuilder, {
  MODAL_CHILDREN_CLASSES,
  MODAL_COMMON_CONTAINER_CLASSES,
  MODAL_CONTAINER_STATUS_CLASSES,
  MODAL_ICON_STATUS_COLOR_CLASSES,
} from '../modalTitleClassBuilder.ts';

describe('modalTitleClassBuilder function', () => {
  it('should have the common classes', () => {
    const classes = modalTitleClassBuilder('default');
    expect(classes.containerClasses.includes(MODAL_COMMON_CONTAINER_CLASSES)).toBe(true);
    expect(classes.childrenClasses).toBe(MODAL_CHILDREN_CLASSES);
  });

  it('should have the default classes', () => {
    const classes = modalTitleClassBuilder('default');
    expect(classes.containerClasses.includes(MODAL_CONTAINER_STATUS_CLASSES.default)).toBe(true);
    expect(classes.iconColor.includes(MODAL_ICON_STATUS_COLOR_CLASSES.default)).toBe(true);
  });

  it('should have the danger classes', () => {
    const classes = modalTitleClassBuilder('danger');
    expect(classes.containerClasses.includes(MODAL_CONTAINER_STATUS_CLASSES.danger)).toBe(true);
    expect(classes.iconColor.includes(MODAL_ICON_STATUS_COLOR_CLASSES.danger)).toBe(true);
  });
});
