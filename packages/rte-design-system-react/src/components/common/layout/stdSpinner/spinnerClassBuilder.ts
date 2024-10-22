/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const COMMON_CLASSSES = 'm-0 animate-spin rounded-full border-primary-600 border-b-primary-100';

export const SIZE_CLASSES = {
  small: 'w-2 h-2 border-4',
  medium: 'w-4 h-4 border-4',
  large: 'w-6 h-6 border-8',
};

export const spinnerClassBuilder = (size: 'small' | 'medium' | 'large' = 'medium') =>
  clsx(COMMON_CLASSSES, SIZE_CLASSES[size]);
