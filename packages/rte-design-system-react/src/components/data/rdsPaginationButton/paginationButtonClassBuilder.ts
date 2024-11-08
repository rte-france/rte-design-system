/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const BUTTON_CLASSES =
  'rds-min-w-3 rds-box-border rds-rounded rds-text-heading-s rds-font-semibold hover:rds-bg-primary-50 focus:rds-outline focus:rds-outline-1 focus:rds-outline-offset-0 focus:rds-outline-primary-900 active:rds-bg-primary-100';

export const COMMON_NUMBER_CLASSES = 'rds-flex rds-items-center rds-justify-center';

export const NUMBER_CLASSES = {
  default: 'rds-h-3 rds-px-0.5',
  active: 'rds-mx-0.25 rds-mt-0.5 rds-h-2.5 rds-border-b-2 rds-border-primary-600 rds-px-0.25 rds-pb-0.25',
};

export const paginationButtonClassBuilder = (active: boolean): { buttonClasses: string; numberClasses: string } => ({
  buttonClasses: BUTTON_CLASSES,
  numberClasses: clsx(COMMON_NUMBER_CLASSES, active ? NUMBER_CLASSES.active : NUMBER_CLASSES.default),
});
