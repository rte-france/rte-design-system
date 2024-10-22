/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  RENDER_CHECKBOX_CONTAINER,
  RENDER_CHECKBOX_INPUT,
  RENDER_CONTAINER,
  RENDER_FOCUSABLE,
  renderCheckboxClassBuilder,
  renderIconLabelClassBuilder,
  renderLabelClassBuilder,
} from '../StdRenderClassBuilder';

describe('renderIconLabelClassBuilder', () => {
  it('check all type of classes', () => {
    const className = renderIconLabelClassBuilder();
    expect(className.container.includes(RENDER_CONTAINER)).toBe(true);
    expect(className.container.includes(RENDER_FOCUSABLE)).toBe(true);
  });
});

describe('renderLabelClassBuilder', () => {
  it('check all type of classes', () => {
    const className = renderLabelClassBuilder();
    expect(className.container.includes(RENDER_CONTAINER)).toBe(true);
    expect(className.container.includes(RENDER_FOCUSABLE)).toBe(true);
  });
});
describe('renderCheckboxClassBuilder', () => {
  it('check all type of classes', () => {
    const className = renderCheckboxClassBuilder();
    expect(className.container.includes(RENDER_CHECKBOX_CONTAINER)).toBe(true);
    expect(className.input.includes(RENDER_CHECKBOX_INPUT)).toBe(true);
    expect(className.input.includes(RENDER_FOCUSABLE)).toBe(true);
  });
});
