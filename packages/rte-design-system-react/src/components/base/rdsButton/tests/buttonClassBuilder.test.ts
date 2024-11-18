/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import clsx from 'clsx';
import {
  buttonClassBuilder,
  COMMON_CLASSES,
  FOCUS_CLASSES,
  LABEL_CLASSES_PADDING_SIZE,
  labelClassBuilder,
  SINGLE_ICON_CLASSES,
  SIZE_CLASSES,
  VARIANT_CLASSES,
  VARIANT_CLASSES_DISABLED,
} from '../buttonClassBuilder.ts';

describe('buttonClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(buttonClassBuilder('contained', 'primary', 'medium', false, true)).toContain(COMMON_CLASSES);
  });
  it('should have the proper variant and color classes', () => {
    expect(buttonClassBuilder('contained', 'primary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.primary.contained),
    );
    expect(buttonClassBuilder('dashed', 'primary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.primary.dashed),
    );
    expect(buttonClassBuilder('outlined', 'primary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.primary.outlined),
    );
    expect(buttonClassBuilder('text', 'primary', 'medium', false, true)).toContain(clsx(VARIANT_CLASSES.primary.text));
    expect(buttonClassBuilder('transparent', 'primary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.primary.transparent),
    );
    expect(buttonClassBuilder('contained', 'secondary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.secondary.contained),
    );
    expect(buttonClassBuilder('dashed', 'secondary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.secondary.dashed),
    );
    expect(buttonClassBuilder('outlined', 'secondary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.secondary.outlined),
    );
    expect(buttonClassBuilder('text', 'secondary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.secondary.text),
    );
    expect(buttonClassBuilder('transparent', 'secondary', 'medium', false, true)).toContain(
      clsx(VARIANT_CLASSES.secondary.transparent),
    );
  });
  it('should have the proper size classes', () => {
    expect(buttonClassBuilder('contained', 'primary', 'medium', false, true)).toContain(SIZE_CLASSES.medium);
    expect(buttonClassBuilder('contained', 'primary', 'small', false, true)).toContain(SIZE_CLASSES.small);
  });
  it('should have the proper focus and color classes if disabled is false', () => {
    expect(buttonClassBuilder('contained', 'primary', 'medium', false, true)).toContain(FOCUS_CLASSES.primary);
    expect(buttonClassBuilder('contained', 'secondary', 'medium', false, true)).toContain(FOCUS_CLASSES.secondary);
  });
  it('should not have any focus class if disabled is true', () => {
    expect(buttonClassBuilder('contained', 'primary', 'medium', true, true)).not.toContain(FOCUS_CLASSES.primary);
    expect(buttonClassBuilder('contained', 'secondary', 'medium', true, true)).not.toContain(FOCUS_CLASSES.secondary);
  });
  it('should have the proper disabled classes', () => {
    expect(buttonClassBuilder('contained', 'primary', 'medium', true, true)).toContain(
      VARIANT_CLASSES_DISABLED.contained,
    );
    expect(buttonClassBuilder('dashed', 'primary', 'medium', true, true)).toContain(VARIANT_CLASSES_DISABLED.dashed);
    expect(buttonClassBuilder('outlined', 'primary', 'medium', true, true)).toContain(
      VARIANT_CLASSES_DISABLED.outlined,
    );
    expect(buttonClassBuilder('text', 'primary', 'medium', true, true)).toContain(VARIANT_CLASSES_DISABLED.text);
    expect(buttonClassBuilder('transparent', 'primary', 'medium', true, true)).toContain(
      VARIANT_CLASSES_DISABLED.transparent,
    );
  });
  it('should have the proper classes if there is no label and only one icon', () => {
    expect(buttonClassBuilder('contained', 'primary', 'medium', true, false)).toContain(SINGLE_ICON_CLASSES.medium);
    expect(buttonClassBuilder('contained', 'primary', 'small', true, false)).toContain(SINGLE_ICON_CLASSES.small);
  });
});

describe('button labelClassBuilder function', () => {
  it('should return uniform margin if the component has no icon', () => {
    expect(labelClassBuilder('extraSmall')).toContain(LABEL_CLASSES_PADDING_SIZE.extraSmall);
    expect(labelClassBuilder('small')).toContain(LABEL_CLASSES_PADDING_SIZE.small);
    expect(labelClassBuilder('medium')).toContain(LABEL_CLASSES_PADDING_SIZE.medium);
  });
});
