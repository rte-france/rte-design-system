/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export type User = {
  id: string;
  nni: string;
  fullname: string;
  email: string;
  isAdmin?: boolean;
};

export type UserNameNni = {
  nni: string;
  fullName: string;
};

export type UserInfo = UserNameNni & {
  email: string;
};
export type UserNameDate = {
  date: Date;
  user: string;
};
