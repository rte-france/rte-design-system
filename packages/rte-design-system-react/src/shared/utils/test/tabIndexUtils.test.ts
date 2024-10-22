/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { tabIndex } from '../tabIndexUtils';

describe('tabIndex', () => {
  it('should return the expected values', () => {
    expect(tabIndex(true)).toBe(0);
    expect(tabIndex(false)).toBeUndefined();
  });
});
