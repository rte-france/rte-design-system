/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

export const RADIO_CIRCLE_CLASSES =
  'rds-h-1.25 rds-w-1.25 rds-rounded-full rds-outline rds-outline-1 rds-outline-offset-2 rds-outline-gray-600';

export const COMMON_CONTAINER_CLASSES = 'rds-peer rds-rounded rds-p-0.125 rds-mt-0.25 rds-cursor-pointer';

export const FOCUS_CONTAINER_CLASSES =
  'rds-outline-offset-1 peer-focus-visible:rds-outline peer-focus-visible:rds-outline-1 peer-focus-visible:rds-outline-gray-900 peer-checked:peer-focus-visible:rds-outline-primary-900';

export const ENABLED_BORDER_CLASSES =
  '[&_>div>div]:rds-outline-gray-600 peer-checked:[&_>div>div]:rds-outline-primary-600 rds-peer-checked:[&_>div:hover>div]:rds-outline-primary-800 peer-checked:[&_>div:hover:active>div]:rds-outline-primary-900 peer-[:not(:checked)]:[&_>div:hover]:rds-bg-gray-300 peer-[:not(:checked)]:[&_>div:hover>div]:rds-outline-gray-900 peer-[:not(:checked)]:[&_>div:hover:active]:rds-bg-gray-500';

export const DISABLED_BORDER_CLASSES = '[&_>div]:rds-bg-gray-100 [&_>div>div]:rds-outline-gray-500';

export const ENABLED_CHECK_CLASSES =
  'peer-checked:[&_>div>div]:rds-bg-primary-600 rds-peer-checked:[&>div:hover>div]:rds-bg-primary-800 peer-checked:[&_>div:hover:active>div]:rds-bg-primary-900';
export const DISABLED_CHECK_CLASSES = 'peer-checked:[&_>div>div]:bg-gray-500';

export const COMMON_LABEL_CONTAINER_CLASSES = 'rds-flex rds-items-start rds-gap-1';

export const DISABLED_LABEL_CONTAINER_CLASSES = '[&_*]:rds-cursor-not-allowed';

export const COMMON_TEXT_CLASSES = 'rds-break-all rds-text-body-s';

export const DISABLED_TEXT_CLASSES = 'rds-text-gray-500';

const radioButtonClassBuilder = (disabled?: boolean) => {
  const classes = {
    labelContainerClasses: COMMON_LABEL_CONTAINER_CLASSES,
    containerClasses: COMMON_CONTAINER_CLASSES,
    radioCircleClasses: RADIO_CIRCLE_CLASSES,
    textClasses: COMMON_TEXT_CLASSES,
  };

  if (disabled) {
    classes.labelContainerClasses = clsx(classes.labelContainerClasses, DISABLED_LABEL_CONTAINER_CLASSES);
    classes.containerClasses = clsx(classes.containerClasses, DISABLED_BORDER_CLASSES, DISABLED_CHECK_CLASSES);
    classes.textClasses = clsx(classes.textClasses, DISABLED_TEXT_CLASSES);
    return classes;
  }
  classes.containerClasses = clsx(
    classes.containerClasses,
    FOCUS_CONTAINER_CLASSES,
    ENABLED_BORDER_CLASSES,
    ENABLED_CHECK_CLASSES,
  );
  return classes;
};

export default radioButtonClassBuilder;