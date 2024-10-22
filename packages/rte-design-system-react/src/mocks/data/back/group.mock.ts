/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateFixedUsers } from './user.mocks';

export const generateFixedGroup = (idx: number, nbUsers = 5) => ({
  id: `${idx}`,
  name: `Groupe ${idx}`,
  members: generateFixedUsers(nbUsers, idx),
});

export const generateFixedGroups = (nbGroups: number, nbUsersPerGroup = 5, seed = 1) =>
  Array.from({ length: nbGroups ?? 1 }, (_, idx) => generateFixedGroup((idx + seed) * seed, nbUsersPerGroup));
