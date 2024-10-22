/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

const DIV_LABEL_CLASSES =
  'inline-flex w-full justify-between px-0.5 py-0.25 text-body-s  group-has-[:user-invalid]:text-error-600';

const DIV_INPUTS_CLASSES =
  '[:user-invalid]:border-red-500 inline-flex items-center gap-1 rounded border p-0.5 pl-1 pr-2 ' +
  'group-has-[:disabled]:border-gray-300 group-has-[:disabled]:bg-gray-200 group-has-[:focus]:border-primary-600 ' +
  '[&]:group-has-[:user-invalid]:border-error-500 hover:bg-gray-100 ';

const INPUT_CLASSES =
  'bg-transparent text-center focus:outline-none [&::-webkit-calendar-picker-indicator]:hidden disabled:text-gray-500';

const SPAN_CLASSES = 'h-2 px-1 text-body-s  group-has-[:user-invalid]:text-error-600';

const SEPARATOR_DIV_CLASSES = 'h-3 w-0.125 bg-primary-700 group-has-[:disabled]:bg-gray-500';

export const dateInputClassBuilder = (forceError: boolean) => {
  const divLabelClasses = forceError
    ? clsx(DIV_LABEL_CLASSES, 'text-error-600')
    : clsx(DIV_LABEL_CLASSES, 'text-gray-700');
  const divInputsClasses = forceError
    ? clsx(DIV_INPUTS_CLASSES, 'border-error-500')
    : clsx(DIV_INPUTS_CLASSES, 'border-gray-400');
  const spanClasses = forceError ? clsx(SPAN_CLASSES, 'text-error-600') : clsx(SPAN_CLASSES, 'text-gray-700');
  return {
    divLabelClasses,
    divInputsClasses,
    spanClasses,
    inputClasses: INPUT_CLASSES,
    separatorDivClasses: SEPARATOR_DIV_CLASSES,
  };
};
