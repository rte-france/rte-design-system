/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { HeadingSize, HeadingWeight } from './RdsHeading.tsx';

export const COMMON_CLASSES = 'rds-mb-0.5 rds-text-left';

export const SIZE_CLASSES = {
  xl: 'rds-text-heading-xl',
  l: 'rds-text-heading-l',
  m: 'rds-text-heading-m',
  s: 'rds-text-heading-s',
  xs: 'rds-text-heading-xs',
};

export const WEIGHT_CLASSES = {
  semibold: 'rds-font-semibold',
};

export const headingClassBuilder = (size: HeadingSize, weight: HeadingWeight) =>
  weight === 'regular'
    ? clsx(COMMON_CLASSES, SIZE_CLASSES[size])
    : clsx(COMMON_CLASSES, SIZE_CLASSES[size], WEIGHT_CLASSES[weight]);
