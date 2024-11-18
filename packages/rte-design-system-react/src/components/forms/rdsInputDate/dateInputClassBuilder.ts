/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';

const DIV_LABEL_CLASSES =
  'rds-inline-flex rds-w-full rds-justify-between rds-px-0.5 rds-py-0.25 rds-text-body-s group-has-[:user-invalid]:rds-text-error-600';

const DIV_INPUTS_CLASSES =
  '[:user-invalid]:rds-border-red-500 rds-inline-flex rds-items-center rds-gap-1 rds-rounded rds-border rds-p-0.5 rds-pl-1 rds-pr-2 ' +
  'group-has-[:disabled]:rds-border-gray-300 group-has-[:disabled]:rds-bg-gray-200 group-has-[:focus]:rds-border-primary-600 ' +
  '[&]:group-has-[:user-invalid]:rds-border-error-500 hover:rds-bg-gray-100 ';

const INPUT_CLASSES =
  'rds-bg-transparent rds-text-center focus:rds-outline-none [&::-webkit-calendar-picker-indicator]:rds-hidden disabled:rds-text-gray-500';

const SPAN_CLASSES = 'rds-h-2 rds-px-1 rds-text-body-s  group-has-[:user-invalid]:rds-text-error-600';

const SEPARATOR_DIV_CLASSES = 'rds-h-3 rds-w-0.125 rds-bg-primary-700 group-has-[:disabled]:rds-bg-gray-500';

export const dateInputClassBuilder = (forceError: boolean) => {
  const divLabelClasses = forceError
    ? clsx(DIV_LABEL_CLASSES, 'rds-text-error-600')
    : clsx(DIV_LABEL_CLASSES, 'rds-text-gray-700');
  const divInputsClasses = forceError
    ? clsx(DIV_INPUTS_CLASSES, 'rds-border-error-500')
    : clsx(DIV_INPUTS_CLASSES, 'rds-border-gray-400');
  const spanClasses = forceError ? clsx(SPAN_CLASSES, 'rds-text-error-600') : clsx(SPAN_CLASSES, 'rds-text-gray-700');
  return {
    divLabelClasses,
    divInputsClasses,
    spanClasses,
    inputClasses: INPUT_CLASSES,
    separatorDivClasses: SEPARATOR_DIV_CLASSES,
  };
};
