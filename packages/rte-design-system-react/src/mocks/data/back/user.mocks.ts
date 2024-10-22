/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { randomNumber } from "@/mocks/mockTools";
import { User } from "@/shared/types/User.type";
import { LIST_FIRSTNAME, LIST_NAME } from "../testsData/names";

export const generateFirstName = (userIdx: number, seed = 1) =>
  LIST_FIRSTNAME[(userIdx + seed) % LIST_FIRSTNAME.length];

export const generateLastName = (userIdx: number, seed = 1) =>
  LIST_NAME[(userIdx + seed) % LIST_FIRSTNAME.length];

export const generateFullName = (userIdx: number, seed = 1) =>
  `${generateFirstName(userIdx, seed)} ${generateLastName(userIdx, seed)}`;

export const generateFixedFullNames = (nbUsers: number, seed = 1) =>
  Array.from({ length: nbUsers ?? 1 }, (_, idx) =>
    generateFullName((idx + seed) * seed)
  );

export const generateFixedUser = (userIdx: number, seed = 1): User => {
  const firstName = generateFirstName(userIdx, seed);
  const name = generateLastName(userIdx, seed);
  return {
    id: `${userIdx}`,
    fullname: `${firstName} ${name}`,
    email: `${firstName.toLocaleLowerCase()}.${name.toLocaleLowerCase()}@rte-france.com`,
    nni: `R${Math.floor((userIdx + seed) * 12738) % 99999}`,
  };
};

export const randomUser = () =>
  generateFixedUser(randomNumber(100), randomNumber(100));
export const generateFixedUsers = (nbUsers: number, seed = 1) =>
  Array.from({ length: nbUsers ?? 1 }, (_, idx) =>
    generateFixedUser((idx + seed) * seed)
  );
export const randomUsers = (nbUsers: number) =>
  generateFixedUsers(nbUsers, randomNumber(100));
