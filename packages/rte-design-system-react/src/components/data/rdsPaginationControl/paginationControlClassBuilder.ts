/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import type { PaginationControlSize } from './RdsPaginationControl.tsx';

export const COMMON_MAIN_CLASSES = 'rds-flex rds-items-center';

export const MAIN_CLASSES = {
  medium: 'rds-gap-1',
  small: 'rds-gap-2',
};

export const LABEL_CLASSES = {
  medium: 'rds-text-heading-s',
  small: 'rds-text-overnote rds-font-semibold',
};

export const paginationControlClassBuilder = (
  size: PaginationControlSize,
): { mainClasses: string; labelClasses: string } => ({
  mainClasses: clsx(COMMON_MAIN_CLASSES, MAIN_CLASSES[size]),
  labelClasses: LABEL_CLASSES[size],
});
