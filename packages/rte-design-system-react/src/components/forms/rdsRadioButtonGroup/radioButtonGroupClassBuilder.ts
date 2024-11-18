/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const COMMON_TEXT_CLASSES = 'rds-mb-2 rds-break-all rds-text-heading-xs';

export const DISABLED_TEXT_CLASSES = 'rds-text-gray-500';

export const COMMON_FIELSET_CLASSES = 'rds-flex rds-flex-col rds-gap-1 rds-text-left';

export const COMMON_HELPER_TEXT_CLASSES = 'rds-text-caption';

export const TEXT_COLOR_HELPER_ERROR_CLASSES = 'rds-text-error-600';

const radioButtonGroupClassBuilder = (error?: boolean, disabled?: boolean) => {
  const classes = {
    textClasses: COMMON_TEXT_CLASSES,
    fieldsetClasses: COMMON_FIELSET_CLASSES,
    helperTextClasses: COMMON_HELPER_TEXT_CLASSES,
  };
  if (disabled) {
    classes.textClasses = clsx(classes.textClasses, DISABLED_TEXT_CLASSES);
  }
  if (error) {
    classes.helperTextClasses = clsx(classes.helperTextClasses, TEXT_COLOR_HELPER_ERROR_CLASSES);
  }
  return classes;
};

export default radioButtonGroupClassBuilder;