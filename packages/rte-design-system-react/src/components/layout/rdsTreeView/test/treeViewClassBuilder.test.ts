/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  ACTIVATE,
  COLLAPSE_CONTAINER_CLASSES,
  RENDER_CONTAINER_FOCUSABLE,
  TREE_CONTAINER_CLASSES,
  treeCollaplseIconClassBuilder,
  treeItemContainerClassBuilder,
} from '../treeViewClassBuilder.ts';

describe('treeItemContainerClassBuilder', () => {
  it('check all type of classes', () => {
    const className = treeItemContainerClassBuilder();
    expect(className.container.includes(TREE_CONTAINER_CLASSES)).toBe(true);
    expect(className.container.includes(RENDER_CONTAINER_FOCUSABLE)).toBe(true);
    expect(className.container.includes(ACTIVATE)).toBe(false);
  });
  it('when activated, classes should contains active classes', () => {
    const className = treeItemContainerClassBuilder(true);
    expect(className.container.includes(ACTIVATE)).toBe(true);
  });
});

describe('treeCollaplseIconClassBuilder', () => {
  it('check all type of classes', () => {
    const className = treeCollaplseIconClassBuilder();
    expect(className.container.includes(COLLAPSE_CONTAINER_CLASSES)).toBe(true);
  });
});
