/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateFixedFullNames, generateFullName } from '@/mocks/data/back/user.mocks';
import { getInitials, getUserInitials, splitNameList } from '../avatarTools';

const TEST_ONE_USER_LIST = [generateFullName(1)];
const TEST_USER = TEST_ONE_USER_LIST[0];
const TEST_MULTIPLE_USERS = generateFixedFullNames(5);

describe('splitUserList function', () => {
  it('should give the list of all displayable user', () => {
    expect(splitNameList(TEST_ONE_USER_LIST).length).toBe(1);
    expect(splitNameList(TEST_MULTIPLE_USERS).length).toBe(3);
  });
});

describe('getUserInitials', () => {
  it('should get the Initials of the user or +n with n being the number of user in the list', () => {
    expect(getUserInitials(TEST_USER)).toBe(getInitials(TEST_USER));
    expect(getUserInitials(TEST_MULTIPLE_USERS)).toBe('+5');
  });
});
