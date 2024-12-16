/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { FileInputSize } from './fileUtils.ts';

export const FILE_CONTAINER_CLASSES = 'rds-flex rds-h-full rds-flex-col';
export const FILE_CONTAINER_SIZE_CLASSES = {
  small: 'rds-w-28',
  medium: 'rds-w-36',
};

export const FILE_INPUT_WRAPPER_HOVER_CLASSES = 'hover:rds-border-gray-500 hover:rds-bg-gray-300';
export const FILE_INPUT_WRAPPER_FOCUS_CLASSES = 'focus-visible:rds-border-solid focus-visible:rds-border-gray-900';
export const FILE_INPUT_WRAPPER_ACTIVE_CLASSES =
  'active:rds-border-gray-500 active:rds-bg-gray-400 active:rds-border-dashed';
export const FILE_INPUT_WRAPPER_DISABLED_CLASSES = '[&]:rds-cursor-not-allowed';
export const FILE_INPUT_WRAPPER_CLASSES =
  'rds-flex rds-flex-col rds-items-center rds-justify-center rds-gap-1 rds-px-0.5 rds-cursor-pointer rds-rounded-md rds-border-2 rds-border-dashed rds-border-gray-400 rds-bg-gray-200 rds-outline-none';

export const FILE_INPUT_WRAPPER_SIZE_CLASSES = {
  small: 'rds-w-28 rds-h-16',
  medium: 'rds-w-36 rds-h-24',
};

export const FILE_INPUT_WRAPPER_ACTIVE_DRAG_CLASSES = 'rds-border-gray-500 rds-bg-gray-400 rds-border-dashed';

export const FILE_HELPER_TEXT_CLASSES = 'rds-px-0.5 rds-py-0.25 rds-text-left rds-text-caption rds-font-semibold';

export const FILE_ERROR_CLASSES = {
  inputWrapper: '[&]:rds-border-error-600',
  helperText: '[&]:rds-text-error-600',
};

export const fileInputClassBuilder = (size: FileInputSize, disabled: boolean, error: boolean, dragActive: boolean) => ({
  containerClasses: clsx(FILE_CONTAINER_CLASSES, FILE_CONTAINER_SIZE_CLASSES[size]),
  inputWrapperClasses: clsx(FILE_INPUT_WRAPPER_CLASSES, FILE_INPUT_WRAPPER_SIZE_CLASSES[size], {
    [FILE_INPUT_WRAPPER_FOCUS_CLASSES]: !disabled,
    [FILE_INPUT_WRAPPER_ACTIVE_CLASSES]: !disabled,
    [FILE_INPUT_WRAPPER_HOVER_CLASSES]: !disabled,
    [FILE_INPUT_WRAPPER_ACTIVE_DRAG_CLASSES]: !disabled && dragActive,
    [FILE_INPUT_WRAPPER_DISABLED_CLASSES]: disabled,
    [FILE_ERROR_CLASSES.inputWrapper]: error,
  }),
  helperTextClasses: clsx(FILE_HELPER_TEXT_CLASSES, error && FILE_ERROR_CLASSES.helperText),
});
