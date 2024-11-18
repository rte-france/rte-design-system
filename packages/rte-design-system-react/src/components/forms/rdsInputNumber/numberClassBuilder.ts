/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import type { NumberVariant } from './RdsInputNumber.tsx';

export const WRAPPER_CLASSES = 'rds-flex-col rds-justify-start rds-items-start rds-inline-flex rds-w-full';

export const NUMBER_CLASSES =
  'rds-px-0.5 rds-py-0.25 rds-text-overnote rds-font-semibold rds-text-gray-700 rds-inline-flex rds-justify-between rds-w-full';
export const HELPER_CLASSES = 'rds-h-2 rds-px-1 rds-py-0.25 rds-text-caption rds-cursor-default rds-break-words';
export const BUTTON_CONTAINER_CLASSES = 'rds-flex rds-gap-0.5 rds-px-0.5';
export const DIVIDER_CLASSES = 'rds-w-0.125 rds-bg-gray-300';
export const INPUT_CLASSES =
  'rds-w-full rds-outline-none rds-bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:rds-appearance-none [&::-webkit-inner-spin-button]:rds-appearance-none rds-h-2.5';

export const COMMON_VARIANT_CLASSES =
  'rds-w-full rds-pl-2 rds-pr-0.5 rds-py-0.5 rds-gap-2 rds-outline-none rds-border rds-flex rds-items-center';

export const VARIANT_CLASSES = {
  outlined: 'rds-bg-gray-w hover:rds-bg-gray-100 focus-within:rds-border-primary-600 rds-rounded rds-border-gray-400',
  text: 'rds-bg-gray-w hover:rds-bg-gray-100 focus-within:rds-border-b-primary-600 rds-border-gray-w rds-border-b-gray-400',
};

export const VARIANT_DISABLED_CLASSES = {
  text: '[&]:rds-text-gray-500',
  container: {
    outlined: '[&]:rds-bg-gray-200 hover:rds-[&] [&]:rds-text-gray-500 [&]:rds-cursor-not-allowed',
    text: '[&]:rds-bg-gray-200 hover:rds-[&] [&]:rds-text-gray-500 [&]:rds-cursor-not-allowed',
  },
  input: '[&]:rds-cursor-not-allowed',
};

export const ERROR_CLASSES = {
  text: '[&&]:rds-text-error-600',
  container: {
    outlined: '[&]:rds-border-error-600',
    text: '[&]:rds-border-b-error-600',
  },
};

export const numberClassBuilder = (variant: NumberVariant, disabled: boolean, error: boolean) => {
  const classes = {
    wrapperClasses: WRAPPER_CLASSES,
    labelClasses: NUMBER_CLASSES,
    containerClasses: clsx(COMMON_VARIANT_CLASSES, VARIANT_CLASSES[variant]),
    inputClasses: INPUT_CLASSES,
    buttonContainerClasses: BUTTON_CONTAINER_CLASSES,
    dividerClasses: DIVIDER_CLASSES,
    helperClasses: HELPER_CLASSES,
  };
  if (disabled) {
    classes.containerClasses = clsx(classes.containerClasses, VARIANT_DISABLED_CLASSES.container[variant]);
    classes.inputClasses = clsx(classes.inputClasses, VARIANT_DISABLED_CLASSES.input);
    classes.helperClasses = clsx(classes.helperClasses, VARIANT_DISABLED_CLASSES.text);
  }
  if (error) {
    classes.containerClasses = clsx(classes.containerClasses, ERROR_CLASSES.container[variant]);
    classes.labelClasses = clsx(classes.labelClasses, ERROR_CLASSES.text);
    classes.helperClasses = clsx(classes.helperClasses, ERROR_CLASSES.text);
  }

  return classes;
};
