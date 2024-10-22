/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import clsx from 'clsx';

export const CONTAINER_CLASSES = 'flex direction-row items-center gap-1';

export const RANGE_BAR_CLASSES = 'w-full h-0.25 appearance-none';

export const THUMB_CLASSES = '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full';

export const THUMB_VARIANT_CLASSES = {
  round: '[&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2',
  bar: '[&::-webkit-slider-thumb]:w-0.25 [&::-webkit-slider-thumb]:h-2',
};

export const TRACK_CLASSES =
  '[&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-runnable-track]:rounded-full ' +
  'bg-gradient-to-r from-primary-500 to-error-700';

export const FOCUS_THUMB_CLASSES =
  'focus:outline-none [&:focus-visible::-webkit-slider-thumb]:outline [&:focus-visible::-webkit-slider-thumb]:outline-1 [&:focus-visible::-webkit-slider-thumb]:outline-offset-1';

export const DEFAULT_STATE_VARIANT_CLASSES =
  '[&::-webkit-slider-thumb]:bg-primary-500 hover:cursor-pointer [&:focus-visible::-webkit-slider-thumb]:bg-primary-900 active:[&::-webkit-slider-thumb]:bg-primary-900';

export const DISABLED_STATE_VARIANT_CLASSES = '[&::-webkit-slider-thumb]:bg-gray-500 hover:cursor-not-allowed';
export const READONLY_STATE_VARIANT_CLASSES = '[&::-webkit-slider-thumb]:bg-gray-700 hover:cursor-not-allowed';
export const ERROR_STATE_VARIANT_CLASSES = '[&::-webkit-slider-thumb]:bg-error-600  hover:cursor-pointer';

export const COMMON_HELPER_TEXT_CLASSES = 'py-0.25 text-left text-caption';
export const ERROR_HELPER_TEXT_CLASSES = 'text-error-600';

export const COMMON_SLIDER_CLASSES = clsx(RANGE_BAR_CLASSES, THUMB_CLASSES, TRACK_CLASSES);

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
  sliderValue: number,
  status: 'readOnly' | 'disabled' | 'error' | 'default' = 'default',
) =>
  `linear-gradient(to right, var(${TRACK_LINEAR_GRADIENT[status].selected}) ${(((sliderValue - min) / (max - min)) * 100).toFixed(2)}%, 0, var(${TRACK_LINEAR_GRADIENT[status].unselected}))`;

export const sliderClassBuilder = (
  readOnly?: boolean,
  error?: boolean,
  disabled?: boolean,
  min: number = 0,
  max: number = 0,
  sliderValue: number = 0,
) => {
  const sliderClasses = {
    sliderClasses: COMMON_SLIDER_CLASSES,
    containerClasses: CONTAINER_CLASSES,
    helperTextClasses: COMMON_HELPER_TEXT_CLASSES,
    styles: {
      background: '',
    },
  };

  if (readOnly) {
    sliderClasses.sliderClasses = clsx(
      sliderClasses.sliderClasses,
      READONLY_STATE_VARIANT_CLASSES,
      THUMB_VARIANT_CLASSES.bar,
    );
    sliderClasses.styles.background = buildLinearGradient(min, max, sliderValue, 'readOnly');
    sliderClasses.sliderClasses = clsx(sliderClasses.sliderClasses, THUMB_VARIANT_CLASSES.bar);

    return sliderClasses;
  }

  sliderClasses.sliderClasses = clsx(sliderClasses.sliderClasses, THUMB_VARIANT_CLASSES.round);

  if (disabled) {
    sliderClasses.sliderClasses = clsx(sliderClasses.sliderClasses, DISABLED_STATE_VARIANT_CLASSES);
    sliderClasses.styles.background = buildLinearGradient(min, max, sliderValue, 'disabled');

    return sliderClasses;
  }

  sliderClasses.sliderClasses = clsx(sliderClasses.sliderClasses, FOCUS_THUMB_CLASSES);

  if (error) {
    sliderClasses.sliderClasses = clsx(sliderClasses.sliderClasses, ERROR_STATE_VARIANT_CLASSES);
    sliderClasses.styles.background = buildLinearGradient(min, max, sliderValue, 'error');
    sliderClasses.helperTextClasses = clsx(sliderClasses.helperTextClasses, ERROR_HELPER_TEXT_CLASSES);

    return sliderClasses;
  }

  sliderClasses.sliderClasses = clsx(sliderClasses.sliderClasses, DEFAULT_STATE_VARIANT_CLASSES);
  sliderClasses.styles.background = buildLinearGradient(min, max, sliderValue, 'default');

  return sliderClasses;
};
