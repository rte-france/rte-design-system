/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { TAG_CLASSES, tagClassBuilder, UTILITY_CLASSES } from '../tagClassBuilder.ts';

describe('tagClassBuilder function', () => {
  it('should have the common classes', () => {
    expect(tagClassBuilder().includes(TAG_CLASSES)).toBe(true);
    expect(tagClassBuilder().includes(UTILITY_CLASSES)).toBe(true);
  });

  it('should have the correct padding classes', () => {
    expect(tagClassBuilder().includes('px-0.5')).toBe(true);
    expect(tagClassBuilder(true).includes('pl-0.5')).toBe(true);
  });
});
