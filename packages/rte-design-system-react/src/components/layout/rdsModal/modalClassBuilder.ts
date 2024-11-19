/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { ModalSize } from './RdsModal.tsx';

const COMMON_MODAL_CLASSES = 'rds-ig-scrollbar rds-flex rds-items-stretch rds-overflow-hidden';

const SIZE_MODAL_CLASSES = {
  extraSmall: 'rds-w-70vw sm:rds-w-45vw md:rds-w-35vw lg:rds-w-30vw xl:rds-w-25vw',
  small: 'rds-w-75vw sm:rds-w-55vw md:rds-w-45vw lg:rds-w-40vw xl:rds-w-35vw',
  medium: 'rds-w-95vw sm:rds-w-75vw md:rds-w-65vw lg:rds-w-60vw xl:rds-w-55vw',
  large: 'rds-w-95vw sm:rds-w-90vw md:rds-w-80vw lg:rds-w-75vw xl:rds-w-70vw',
  extraLarge: 'rds-w-98vw xl:rds-w-95vw',
};

export const modalClassBuilder = (size?: ModalSize) =>
  size ? clsx(COMMON_MODAL_CLASSES, SIZE_MODAL_CLASSES[size]) : COMMON_MODAL_CLASSES;
