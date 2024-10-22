/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useState } from "react";
import { ClientStorageParamsType, useClientStorage } from "./useClientStorage";
import { User } from "@/shared/types/User.type";

const USER_CLIENT_STORAGE_PARAMS: ClientStorageParamsType<User> = {
  key: "user",
  storage: "sessionStorage",
};

export const useInitUser = () => {
  const { value: localStoredUser } = useClientStorage<User>(
    USER_CLIENT_STORAGE_PARAMS
  );
  const [user, setUser] = useState<User | undefined>(localStoredUser);

  return { user, setUser };
};
