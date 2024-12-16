/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const COMMON_TAG_LIST_CLASSES =
  'rds-flex rds-h-full rds-w-full rds-grow rds-basis-full rds-items-center rds-flex-wrap rds-gap-1';

export const tagListClassBuilder = (isReady: boolean) => ({
  tagListClasses: clsx(COMMON_TAG_LIST_CLASSES, !isReady && 'invisible'),
});
