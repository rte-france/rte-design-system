/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  APPEAR_EFFECT_CLASSES,
  COMMON_CLASSES,
  FOCUS_CLASSES,
  VARIANT_CLASSES,
  VARIANT_CLASSES_DISABLED,
  iconButtonClassBuilder,
} from '../iconButtonClassBuilder.ts';

describe('iconButtonClassBuilder function', () => {
  it('should have common classes', () => {
    expect(iconButtonClassBuilder('default', false, false)).toContain(COMMON_CLASSES);
    expect(iconButtonClassBuilder('danger', false, false)).toContain(COMMON_CLASSES);
  });

  it('should have the proper variant classes', () => {
    expect(iconButtonClassBuilder('default', false, false)).toContain(VARIANT_CLASSES.default);
    expect(iconButtonClassBuilder('danger', false, false)).toContain(VARIANT_CLASSES.danger);
  });

  it('should have focus classes if disabled is false', () => {
    expect(iconButtonClassBuilder('default', false, false)).toContain(FOCUS_CLASSES);
    expect(iconButtonClassBuilder('danger', false, false)).toContain(FOCUS_CLASSES);
  });

  it('should not have focus classes if disabled is true', () => {
    expect(iconButtonClassBuilder('default', true, false)).not.toContain(FOCUS_CLASSES);
    expect(iconButtonClassBuilder('danger', true, false)).not.toContain(FOCUS_CLASSES);
  });

  it('should have disabled classes', () => {
    expect(iconButtonClassBuilder('default', true, false)).toContain(VARIANT_CLASSES_DISABLED);
    expect(iconButtonClassBuilder('danger', true, false)).toContain(VARIANT_CLASSES_DISABLED);
  });

  it('should have appear effect classes', () => {
    expect(iconButtonClassBuilder('default', false, true)).toContain(APPEAR_EFFECT_CLASSES);
    expect(iconButtonClassBuilder('danger', false, true)).toContain(APPEAR_EFFECT_CLASSES);
  });

  it("should't have appear effect classes", () => {
    expect(iconButtonClassBuilder('default', true, true)).not.toContain(APPEAR_EFFECT_CLASSES);
    expect(iconButtonClassBuilder('danger', true, true)).not.toContain(APPEAR_EFFECT_CLASSES);
  });
});
