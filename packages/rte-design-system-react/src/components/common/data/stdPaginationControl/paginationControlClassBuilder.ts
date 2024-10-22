/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import type { PaginationControlSize } from './StdPaginationControl';

export const COMMON_MAIN_CLASSES = 'flex items-center';

export const MAIN_CLASSES = {
  medium: 'gap-1',
  small: 'gap-2',
};

export const LABEL_CLASSES = {
  medium: 'text-heading-s',
  small: 'text-overnote font-semibold',
};

export const paginationControlClassBuilder = (
  size: PaginationControlSize,
): { mainClasses: string; labelClasses: string } => ({
  mainClasses: clsx(COMMON_MAIN_CLASSES, MAIN_CLASSES[size]),
  labelClasses: LABEL_CLASSES[size],
});
