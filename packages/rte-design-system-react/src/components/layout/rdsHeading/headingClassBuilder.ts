/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { HeadingSize, HeadingWeight } from './RdsHeading.tsx';

export const HEADING_COMMON_CLASSES = 'rds-mb-0.5 rds-text-left';

export const HEADING_SIZE_CLASSES = {
  xl: 'rds-text-heading-xl',
  l: 'rds-text-heading-l',
  m: 'rds-text-heading-m',
  s: 'rds-text-heading-s',
  xs: 'rds-text-heading-xs',
};

export const HEADING_WEIGHT_CLASSES = {
  semibold: 'rds-font-semibold',
};

export const headingClassBuilder = (size: HeadingSize, weight: HeadingWeight) =>
  weight === 'regular'
    ? clsx(HEADING_COMMON_CLASSES, HEADING_SIZE_CLASSES[size])
    : clsx(HEADING_COMMON_CLASSES, HEADING_SIZE_CLASSES[size], HEADING_WEIGHT_CLASSES[weight]);
