/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import type { NumberVariant } from './StdInputNumber';

export const WRAPPER_CLASSES = 'flex-col justify-start items-start inline-flex w-full';

export const NUMBER_CLASSES =
  'px-0.5 py-0.25 text-overnote font-semibold text-gray-700 inline-flex justify-between w-full';
export const HELPER_CLASSES = 'h-2 px-1 py-0.25 text-caption cursor-default break-words';
export const BUTTON_CONTAINER_CLASSES = 'flex gap-0.5 px-0.5';
export const DIVIDER_CLASSES = 'w-0.125 bg-gray-300';
export const INPUT_CLASSES =
  'w-full outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none h-2.5';

export const COMMON_VARIANT_CLASSES = 'w-full pl-2 pr-0.5 py-0.5 gap-2 outline-none border flex items-center';

export const VARIANT_CLASSES = {
  outlined: 'bg-gray-w hover:bg-gray-100 focus-within:border-primary-600 rounded border-gray-400',
  text: 'bg-gray-w hover:bg-gray-100 focus-within:border-b-primary-600 border-gray-w border-b-gray-400',
};

export const VARIANT_DISABLED_CLASSES = {
  text: '[&]:text-gray-500',
  container: {
    outlined: '[&]:bg-gray-200 hover:[&]:bg-gray-200 [&]:text-gray-500 [&]:cursor-not-allowed',
    text: '[&]:bg-gray-200 hover:[&]:bg-gray-200 [&]:text-gray-500 [&]:cursor-not-allowed',
  },
  input: '[&]:cursor-not-allowed',
};

export const ERROR_CLASSES = {
  text: '[&&]:text-error-600',
  container: {
    outlined: '[&]:border-error-600',
    text: '[&]:border-b-error-600',
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
