/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export type ZIndex =
  | 'z-auto'
  | 'z-0'
  | 'z-10'
  | 'z-20'
  | 'z-30'
  | 'z-40'
  | 'z-50'
  | '-z-10'
  | '-z-30'
  | '-z-40'
  | '-z-20'
  | '-z-50';

  // TODO : to Evoled to tailwind prefix classes
export type TailwindPrefix = 'text' | 'bg' | 'border' | 'outline';

export type Delay = 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;

export type Duration = 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;

export type Rotate = 0 | 1 | 2 | 3 | 6 | 12 | 45 | 90 | 180;

export type RotationOptionsType = {
  delayMs?: Delay;
  rotationDegree?: Rotate;
  durationMs?: Duration;
};


export type PseudoClass =
  | "" // used for default class
  | "Modifier"
  | "hover"
  | "focus"
  | "focus-within"
  | "focus-visible"
  | "active"
  | "visited"
  | "target"
  | "has"
  | "first"
  | "last"
  | "only"
  | "odd"
  | "even"
  | "first-of-type"
  | "last-of-type"
  | "only-of-type"
  | "empty"
  | "disabled"
  | "enabled"
  | "checked"
  | "indeterminate"
  | "default"
  | "required"
  | "valid"
  | "invalid"
  | "in-range"
  | "out-of-range"
  | "placeholder-shown"
  | "autofill"
  | "read-only"
  | "before"
  | "after"
  | "first-letter"
  | "first-line"
  | "marker"
  | "selection"
  | "file"
  | "backdrop"
  | "placeholder"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "max-sm"
  | "max-md"
  | "max-lg"
  | "max-xl"
  | "max-2xl"
  | "dark"
  | "portrait"
  | "landscape"
  | "motion-safe"
  | "motion-reduce"
  | "contrast-more"
  | "contrast-less"
  | "print"
  | "aria-checked"
  | "aria-disabled"
  | "aria-expanded"
  | "aria-hidden"
  | "aria-pressed"
  | "aria-readonly"
  | "aria-required"
  | "aria-selected"
  | "rtl"
  | "ltr"
  | "open"
  | '[&]:';