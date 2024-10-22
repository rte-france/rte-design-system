/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { generateFixedGroups } from "../back/group.mock";
import { generateFixedUsers } from "../back/user.mocks";

export const generateFixedUserMemberships = (nbMemberships: number, seed = 1) =>
  generateFixedUsers(nbMemberships, seed).map((user, idx) => {
    const membership = {
      user,
      role: idx <= Math.trunc((nbMemberships - 1) / 5) ? "owner" : "member",
      type: "user",
    };
    return membership;
  });

export const generateFixedGroupMemberships = (
  nbGroupMemberships: number,
  nbUsersPerGroup = 5,
  seed = 1
) =>
  generateFixedGroups(nbGroupMemberships, nbUsersPerGroup, seed).map(
    (group, idx) => {
      const groupMembership = {
        group,
        role:
          idx <= Math.trunc((nbGroupMemberships - 1) / 5) ? "owner" : "member",
        type: "group",
      };
      return groupMembership;
    }
  );
