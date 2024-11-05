/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const TAG_CLASSES = 'rds-flex rds-h-2.25 rds-max-w-fit rds-items-center rds-rounded-sm rds-bg-gray-200';
export const UTILITY_CLASSES = 'rds-tag';

export const tagClassBuilder = (isClosable?: boolean) =>
  clsx(TAG_CLASSES, UTILITY_CLASSES, isClosable ? 'rds-pl-0.5' : 'rds-px-0.5');
