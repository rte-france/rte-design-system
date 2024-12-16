/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const COMMON_ELEMENT_CLASSES =
  'rds-flex rds-gap-1 rds-text-body-s rds-text-gray-700 rds-cursor-pointer rds-items-center rds-p-1 rds-mx-0.25 rds-rounded';
export const COMMON_ELEMENT_STATUS_CLASSES =
  'focus-visible:rds-outline focus-visible:rds-outline-1 focus-visible:rds-outline-offset-0 focus-visible:rds-outline-gray-900';
export const DISABLED_CLASSES = 'rds-text-gray-500 rds-outline-none';
export const ACTIVE_CLASSES = {
  active: 'rds-bg-primary-50 rds-text-primary-900 hover:rds-bg-primary-100',
  inactive:
    'hover:rds-bg-gray-100 hover:rds-text-gray-800 focus:rds-bg-gray-w focus:rds-outline-1 active:rds-bg-gray-200 active:rds-text-gray-900',
};

export const dropdownElementClassBuilder = (disabled: boolean, active: boolean, additionnalClasses?: string) => {
  if (disabled) {
    return clsx(COMMON_ELEMENT_CLASSES, DISABLED_CLASSES);
  } else {
    const activeKey = active ? 'active' : 'inactive';
    const classes = clsx(COMMON_ELEMENT_CLASSES, COMMON_ELEMENT_STATUS_CLASSES, ACTIVE_CLASSES[activeKey]);
    return additionnalClasses ? clsx(classes, additionnalClasses) : classes;
  }
};
