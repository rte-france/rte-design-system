/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  COMMON_CLASSES,
  SIZE_CLASSES,
  COLOR_CLASSES,
  HAS_VALUE_SIZE_CLASSES,
  badgeClassBuilder,
} from '../badgeClassBuilder';
import { BadgeSize } from '../stdBadge';
import { DisplayStatus } from '@/shared/types';

describe('badgeClassBuilder', () => {
  it('should include common classes', () => {
    (Object.keys(SIZE_CLASSES) as BadgeSize[]).forEach((size) => {
      expect(badgeClassBuilder(size, 'info', 0).includes(COMMON_CLASSES)).toBe(true);
      expect(badgeClassBuilder(size, 'error', 0).includes(COMMON_CLASSES)).toBe(true);
    });
  });
  it('should include size classes', () => {
    (Object.keys(SIZE_CLASSES) as BadgeSize[]).forEach((size) => {
      expect(badgeClassBuilder(size, 'info', 0).includes(SIZE_CLASSES[size])).toBe(true);
    });
  });
  it('should include color classes', () => {
    (Object.keys(COLOR_CLASSES) as DisplayStatus[]).forEach((color) => {
      expect(badgeClassBuilder('extraSmall', color, 0).includes(COLOR_CLASSES[color])).toBe(true);
    });
  });
  it('should include size classes when badge has a value', () => {
    expect(badgeClassBuilder('extraSmall', 'info', 1).includes(HAS_VALUE_SIZE_CLASSES.smallBadgeSize)).toBe(true);
    expect(badgeClassBuilder('extraSmall', 'info', 200).includes(HAS_VALUE_SIZE_CLASSES.largeBadgeSize)).toBe(true);
  });
});
