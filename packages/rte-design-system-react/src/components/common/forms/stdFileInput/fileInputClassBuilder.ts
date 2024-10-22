/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { FileInputSize } from './StdFileInput';

export const CONTAINER_CLASSES = 'flex h-full flex-col';
export const CONTAINER_SIZE_CLASSES = {
  small: 'w-28',
  medium: 'w-36',
};

export const INPUT_WRAPPER_HOVER_CLASSES = 'hover:border-gray-500 hover:bg-gray-300';
export const INPUT_WRAPPER_FOCUS_CLASSES = 'focus-visible:border-solid focus-visible:border-gray-900';
export const INPUT_WRAPPER_ACTIVE_CLASSES = 'active:border-gray-500 active:bg-gray-400 active:border-dashed';
export const INPUT_WRAPPER_DISABLED_CLASSES = '[&]:cursor-not-allowed';
export const INPUT_WRAPPER_CLASSES =
  'flex flex-col items-center justify-center gap-1 px-0.5 cursor-pointer rounded-md border-2 border-dashed border-gray-400 bg-gray-200 outline-none';

export const INPUT_WRAPPER_SIZE_CLASSES = {
  small: 'w-28 h-16',
  medium: 'w-36 h-24',
};

export const INPUT_WRAPPER_ACTIVE_DRAG_CLASSES = 'border-gray-500 bg-gray-400 border-dashed';

export const HELPER_TEXT_CLASSES = 'px-0.5 py-0.25 text-left text-caption font-semibold';

export const ERROR_CLASSES = {
  inputWrapper: '[&]:border-error-600',
  helperText: '[&]:text-error-600',
};

export const fileInputClassBuilder = (size: FileInputSize, disabled: boolean, error: boolean, dragActive: boolean) => ({
  containerClasses: clsx(CONTAINER_CLASSES, CONTAINER_SIZE_CLASSES[size]),
  inputWrapperClasses: clsx(INPUT_WRAPPER_CLASSES, INPUT_WRAPPER_SIZE_CLASSES[size], {
    [INPUT_WRAPPER_FOCUS_CLASSES]: !disabled,
    [INPUT_WRAPPER_ACTIVE_CLASSES]: !disabled,
    [INPUT_WRAPPER_HOVER_CLASSES]: !disabled,
    [INPUT_WRAPPER_ACTIVE_DRAG_CLASSES]: !disabled && dragActive,
    [INPUT_WRAPPER_DISABLED_CLASSES]: disabled,
    [ERROR_CLASSES.inputWrapper]: error,
  }),
  helperTextClasses: clsx(HELPER_TEXT_CLASSES, error && ERROR_CLASSES.helperText),
});
