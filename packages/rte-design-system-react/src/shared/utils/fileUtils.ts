/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FileInputErrorType } from '@/components/common/forms/stdFileInput/StdFileInput';

export const getFileError = (
  file: File,
  acceptedFileTypes: string[],
  maxSize?: number,
): FileInputErrorType | undefined => {
  const acceptedFileTypesSet = new Set(acceptedFileTypes);
  const fileExtension = `.${file.name.split('.').at(-1)}`;

  if (maxSize && file.size > maxSize) {
    return 'sizeError';
  }

  if (!fileExtension || !acceptedFileTypesSet.has(fileExtension)) {
    return 'typeError';
  }

  return;
};
