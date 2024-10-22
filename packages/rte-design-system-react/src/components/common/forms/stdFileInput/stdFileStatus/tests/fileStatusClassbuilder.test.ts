/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { NAME_CLASSES, STATUS_CLASSES, fileStatusClassBuilder } from '../fileStatusClassBuilder';

const TEST_SUCCESS_STATUS = 'success';
const TEST_LOADING_STATUS = 'loading';
const TEST_ERROR_STATUS = 'error';

describe('fileStatusClassBuilder function', () => {
  it('should have the default name classes', () => {
    expect(fileStatusClassBuilder('success').nameClasses.includes(NAME_CLASSES)).toBe(true);
  });
  it('should have the proper success classes', () => {
    expect(fileStatusClassBuilder(TEST_SUCCESS_STATUS).nameClasses.includes(STATUS_CLASSES[TEST_SUCCESS_STATUS])).toBe(
      true,
    );
  });
  it('should have the proper loading classes', () => {
    expect(fileStatusClassBuilder(TEST_LOADING_STATUS).nameClasses.includes(STATUS_CLASSES[TEST_LOADING_STATUS])).toBe(
      true,
    );
  });
  it('should have the proper error classes', () => {
    expect(fileStatusClassBuilder(TEST_ERROR_STATUS).nameClasses.includes(STATUS_CLASSES[TEST_ERROR_STATUS])).toBe(
      true,
    );
  });
});
