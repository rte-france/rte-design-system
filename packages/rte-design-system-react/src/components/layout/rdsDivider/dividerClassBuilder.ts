/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const DIVIDER_COMMON_CLASSES = 'rds-border-t-1 rds-w-full rds-border-gray-300';

export const dividerClassBuilder = (extraClasses?: string) =>
  extraClasses ? clsx(DIVIDER_COMMON_CLASSES, extraClasses) : DIVIDER_COMMON_CLASSES;
