/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import clsx from 'clsx';

export const THUMB_VARIANT_CLASSES = {
  round: '[&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2',
  bar: '[&::-webkit-slider-thumb]:w-0.25 [&::-webkit-slider-thumb]:h-2',
};

export const RANGE_BAR_CLASSES = 'w-full h-0 appearance-none';

export const THUMB_CLASSES =
  'absolute [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full';

export const TRACK_CLASSES = '[&::-webkit-slider-runnable-track]:appearance-none';

export const FOCUS_THUMB_CLASSES =
  'focus:outline-none [&:focus-visible::-webkit-slider-thumb]:outline [&:focus-visible::-webkit-slider-thumb]:outline-1 [&:focus-visible::-webkit-slider-thumb]:outline-offset-1';

export const DEFAULT_STATE_VARIANT_CLASSES =
  '[&::-webkit-slider-thumb]:bg-primary-500 hover:cursor-pointer [&:focus-visible::-webkit-slider-thumb]:bg-primary-900 active:[&::-webkit-slider-thumb]:bg-primary-900';

export const DISABLED_STATE_VARIANT_CLASSES = '[&::-webkit-slider-thumb]:bg-gray-500 hover:cursor-not-allowed';

export const READONLY_STATE_VARIANT_CLASSES = '[&::-webkit-slider-thumb]:bg-gray-700 hover:cursor-not-allowed';

export const ERROR_STATE_VARIANT_CLASSES = '[&::-webkit-slider-thumb]:bg-error-600  hover:cursor-pointer';

export const CONTAINER_CLASSES = 'flex direction-row items-center gap-3';

export const RANGE_CONTAINER_CLASSES = 'relative flex direction-row items-center w-full h-2';

export const NUMBER_CONTAINER_CLASSES = 'flex items-center gap-2 min-w-24';

export const COMMON_HELPER_TEXT_CLASSES = 'py-0.25 text-left text-caption';
export const ERROR_HELPER_TEXT_CLASSES = 'text-error-600';

export const TRACK_LINEAR_GRADIENT = {
  readOnly: {
    selected: '--gray-700',
    unselected: '--gray-300',
  },
  disabled: {
    selected: '--gray-500',
    unselected: '--gray-500',
  },
  error: {
    selected: '--error-600',
    unselected: '--error-300',
  },
  default: {
    selected: '--primary-600',
    unselected: '--primary-300',
  },
  defaultActive: {
    selected: '--primary-900',
    unselected: '--primary-300',
  },
};

const buildLinearGradient = (
  min: number = 0,
  max: number = 0,
  minSliderValue: number,
  maxSliderValue: number,
  status: 'readOnly' | 'disabled' | 'error' | 'default' = 'default',
) =>
  `linear-gradient(to right, var(${TRACK_LINEAR_GRADIENT[status].unselected}) ${((((minSliderValue || 0) - min) / (max - min)) * 100).toFixed(2)}%, 0, var(${TRACK_LINEAR_GRADIENT[status].selected}) ${(((maxSliderValue || 0) - min) / (max - min)) * 100}%, 0, var(${TRACK_LINEAR_GRADIENT[status].unselected}))`;

export const SLIDER_CLASSES = clsx(RANGE_BAR_CLASSES, THUMB_CLASSES, TRACK_CLASSES);

export const dualSliderClassBuilder = (
  foregroundFirstInput: boolean,
  readOnly?: boolean,
  disabled?: boolean,
  error?: boolean,
  min: number = 0,
  max: number = 0,
  minSliderValue: number = 0,
  maxSliderValue: number = 0,
) => {
  let sliderBaseClasses = SLIDER_CLASSES;
  const doubleSliderClasses = {
    minSliderClasses: sliderBaseClasses,
    maxSliderClasses: sliderBaseClasses,
    containerClasses: CONTAINER_CLASSES,
    sliderContainerClasses: RANGE_CONTAINER_CLASSES,
    numberContainerClasses: NUMBER_CONTAINER_CLASSES,
    helperTextClasses: COMMON_HELPER_TEXT_CLASSES,
    styles: {
      background: '',
    },
  };

  if (readOnly) {
    sliderBaseClasses = clsx(sliderBaseClasses, READONLY_STATE_VARIANT_CLASSES, THUMB_VARIANT_CLASSES.bar);
    doubleSliderClasses.minSliderClasses = sliderBaseClasses;
    doubleSliderClasses.maxSliderClasses = sliderBaseClasses;
    doubleSliderClasses.styles.background = buildLinearGradient(min, max, minSliderValue, maxSliderValue, 'readOnly');

    return doubleSliderClasses;
  }

  sliderBaseClasses = clsx(sliderBaseClasses, THUMB_VARIANT_CLASSES.round);

  if (disabled) {
    sliderBaseClasses = clsx(sliderBaseClasses, DISABLED_STATE_VARIANT_CLASSES);
    doubleSliderClasses.minSliderClasses = sliderBaseClasses;
    doubleSliderClasses.maxSliderClasses = sliderBaseClasses;

    doubleSliderClasses.styles.background = buildLinearGradient(min, max, minSliderValue, maxSliderValue, 'disabled');

    return doubleSliderClasses;
  }

  sliderBaseClasses = clsx(sliderBaseClasses, FOCUS_THUMB_CLASSES);
  const foregroundClass = foregroundFirstInput ? 'z-10' : '';

  if (error) {
    sliderBaseClasses = clsx(sliderBaseClasses, ERROR_STATE_VARIANT_CLASSES);
    doubleSliderClasses.minSliderClasses = clsx(foregroundClass, sliderBaseClasses);
    doubleSliderClasses.maxSliderClasses = sliderBaseClasses;
    doubleSliderClasses.styles.background = buildLinearGradient(min, max, minSliderValue, maxSliderValue, 'error');
    doubleSliderClasses.helperTextClasses = clsx(doubleSliderClasses.helperTextClasses, ERROR_HELPER_TEXT_CLASSES);
    return doubleSliderClasses;
  }

  doubleSliderClasses.minSliderClasses = clsx(sliderBaseClasses, foregroundClass, DEFAULT_STATE_VARIANT_CLASSES);
  doubleSliderClasses.maxSliderClasses = clsx(sliderBaseClasses, DEFAULT_STATE_VARIANT_CLASSES);
  doubleSliderClasses.styles.background = buildLinearGradient(min, max, minSliderValue, maxSliderValue, 'default');

  return doubleSliderClasses;
};
