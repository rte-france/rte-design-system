/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  COMMON_MAIN_CLASSES,
  LABEL_CLASSES,
  MAIN_CLASSES,
  paginationControlClassBuilder,
} from '../paginationControlClassBuilder';

describe('paginationControlClassBuilder function', () => {
  it('should have common main classes', () => {
    expect(paginationControlClassBuilder('small').mainClasses.includes(COMMON_MAIN_CLASSES));
    expect(paginationControlClassBuilder('medium').mainClasses.includes(COMMON_MAIN_CLASSES));
  });

  it('should have the propoer main classes', () => {
    expect(paginationControlClassBuilder('small').mainClasses.includes(MAIN_CLASSES.small));
    expect(paginationControlClassBuilder('medium').mainClasses.includes(MAIN_CLASSES.medium));
  });

  it('should have the proper label active classes', () => {
    expect(paginationControlClassBuilder('small').labelClasses.includes(LABEL_CLASSES.small)).toBe(true);
    expect(paginationControlClassBuilder('medium').labelClasses.includes(LABEL_CLASSES.medium)).toBe(true);
  });
});
