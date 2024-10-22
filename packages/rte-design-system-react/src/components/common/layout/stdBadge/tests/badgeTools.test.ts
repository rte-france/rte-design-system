/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { getDisplayedText } from '../badgeTools';
import { randomNumber } from '@/mocks/mockTools';

const MIN_VALUE = Number.MIN_SAFE_INTEGER;
const MAX_VALUE = Number.MAX_SAFE_INTEGER;
const NEGATIVE_VALUE = -1000;
const NULL = 0;
const RANDOM_VALUE_VALID = randomNumber(99);
const HUNDRED = 100;

describe('getDisplayedText', () => {
  it('should render the correct value', () => {
    expect(getDisplayedText(MIN_VALUE)).toBe('');
    expect(getDisplayedText(NEGATIVE_VALUE)).toBe('');
    expect(getDisplayedText(NULL)).toBe('');
    expect(getDisplayedText(RANDOM_VALUE_VALID)).toBe(`${RANDOM_VALUE_VALID}`);
    expect(getDisplayedText(HUNDRED)).toBe('+99');
    expect(getDisplayedText(MAX_VALUE)).toBe('+99');
  });
});
