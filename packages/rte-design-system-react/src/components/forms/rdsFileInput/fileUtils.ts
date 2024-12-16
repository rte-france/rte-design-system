/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export type FileInputErrorType = 'sizeError' | 'typeError';

export type FileInputSize = 'small' | 'medium';

export const getFileError = (file: File, maxSize?: number): FileInputErrorType | undefined => {
  if (maxSize && file.size > maxSize) {
    return 'sizeError';
  }
  return;
};
