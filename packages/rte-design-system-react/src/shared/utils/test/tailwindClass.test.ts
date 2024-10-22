/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PseudoClass, TailwindPrefix } from '@/shared/types/Tailwind.type';
import { TailwindColorClass } from '@/shared/types/TailwindColorClass.type';
import { buildColorClass } from '../tailwindClass';

const TAILWIND_TEXT_PREFIX: TailwindPrefix = 'text';
const TAILWIND_BG_PREFIX: TailwindPrefix = 'bg';
const TAILWIND_PRIMARY_COLOR: TailwindColorClass = 'primary-600';
const TAILWIND_GRAY_COLOR: TailwindColorClass = 'gray-700';
const TAILWIND_HOVER_PSEUDOCLASS: PseudoClass = 'hover:';
const TAILWIND_OVERLOAD_PSEUDOCLASS: PseudoClass = '[&]:';

describe('buildColorClass function', () => {
  it('should return the proper concatenated class based on prefix', () => {
    const TEXT_PRIMARY = `${TAILWIND_TEXT_PREFIX}-${TAILWIND_PRIMARY_COLOR}`;
    expect(buildColorClass(TAILWIND_TEXT_PREFIX, TAILWIND_PRIMARY_COLOR)).toBe(TEXT_PRIMARY);
    const BG_PRIMARY = `${TAILWIND_BG_PREFIX}-${TAILWIND_PRIMARY_COLOR}`;
    expect(buildColorClass(TAILWIND_BG_PREFIX, TAILWIND_PRIMARY_COLOR)).toBe(BG_PRIMARY);
  });
  it('should return the proper concatenated class based on color', () => {
    const TEXT_PRIMARY = `${TAILWIND_TEXT_PREFIX}-${TAILWIND_PRIMARY_COLOR}`;
    expect(buildColorClass(TAILWIND_TEXT_PREFIX, TAILWIND_PRIMARY_COLOR)).toBe(TEXT_PRIMARY);
    const TEXT_GRAY = `${TAILWIND_TEXT_PREFIX}-${TAILWIND_GRAY_COLOR}`;
    expect(buildColorClass(TAILWIND_TEXT_PREFIX, TAILWIND_GRAY_COLOR)).toBe(TEXT_GRAY);
  });
  it('should return the proper concatenated class based on pseudoclass', () => {
    const TEXT_HOVER = `${TAILWIND_HOVER_PSEUDOCLASS}${TAILWIND_TEXT_PREFIX}-${TAILWIND_PRIMARY_COLOR}`;
    expect(buildColorClass(TAILWIND_TEXT_PREFIX, TAILWIND_PRIMARY_COLOR, TAILWIND_HOVER_PSEUDOCLASS)).toBe(TEXT_HOVER);
    const TEXT_OVERLOAD = `${TAILWIND_OVERLOAD_PSEUDOCLASS}${TAILWIND_TEXT_PREFIX}-${TAILWIND_PRIMARY_COLOR}`;
    expect(buildColorClass(TAILWIND_TEXT_PREFIX, TAILWIND_PRIMARY_COLOR, TAILWIND_OVERLOAD_PSEUDOCLASS)).toBe(
      TEXT_OVERLOAD,
    );
  });
});
