/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const AVATAR_COLORS = ['green', 'purple', 'blue', 'pink', 'gray', 'orange'] as const;
const USER_SEPARATOR = ' - ';
const MAX_USER_CHIP = 3;

export const splitNameList = (names: string[]) => {
  if (names.length <= MAX_USER_CHIP) {
    return names;
  }
  const [firstName, secondName, ...otherName] = names;
  return [firstName, secondName, otherName];
};

export const getInitials = (name: string) => {
  const [firstName, lastName = ''] = name.split(' ');
  return lastName.charAt(0) + firstName.charAt(0);
};

export const getUserInitials = (names: string | string[]) => {
  if (!Array.isArray(names)) {
    return getInitials(names);
  }
  return `+${names.length}`;
};

export const getUserFullname = (names: string | string[]) => {
  if (!Array.isArray(names)) {
    return names;
  }
  return names.map((name) => name).join(USER_SEPARATOR);
};

//assign a random color from COLORS
export const getColor = (names: string | string[]) => {
  if (!Array.isArray(names)) {
    return AVATAR_COLORS[names.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % AVATAR_COLORS.length];
  }
  return AVATAR_COLORS[names.length % AVATAR_COLORS.length];
};
