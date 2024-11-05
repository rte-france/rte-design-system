/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId } from '@/utils/index.ts';
import {
  CHIP_TOOGLE_ACTIVE_STATUS_CLASSES,
  chipToggleClassBuilder,
  CHIP_TOOGLE_COMMON_CLASSES,
  CHIP_TOOGLE_HOVER_STATUS_CLASSES,
  CHIP_TOOGLE_PADDING_X_CLASSES,
  CHIP_TOOGLE_STATUS_CLASSES,
} from '../chipToggleClassBuilder.ts';

describe('generateClasses function', () => {
  it('should have the common classes', () => {
    expect(chipToggleClassBuilder('primary').chipClasses).toContain(CHIP_TOOGLE_COMMON_CLASSES);
  });
  test.each([['primary'], ['secondary'], ['success'], ['error']] as const)(
    'should have the proper classes for %s',
    (status) => {
      expect(chipToggleClassBuilder(status).chipClasses).toContain(CHIP_TOOGLE_STATUS_CLASSES[status]);
      expect(chipToggleClassBuilder(status).chipClasses).toContain(CHIP_TOOGLE_HOVER_STATUS_CLASSES[status]);
      expect(chipToggleClassBuilder(status).chipClasses).toContain(CHIP_TOOGLE_ACTIVE_STATUS_CLASSES[status]);
    },
  );

  it('should have the proper variant and type classes', () => {
    expect(chipToggleClassBuilder('primary', 'test').chipClasses).toContain(
      CHIP_TOOGLE_PADDING_X_CLASSES.paddingDefault,
    );
    expect(chipToggleClassBuilder('primary', 'test', RdsIconId.Add).chipClasses).toContain(
      CHIP_TOOGLE_PADDING_X_CLASSES.paddingLeftWithIcon,
    );
  });
});
