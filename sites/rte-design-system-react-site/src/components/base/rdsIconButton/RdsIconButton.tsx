/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconButton, RdsIconId } from "rte-design-system-react";

export const RdsIconButtonDemo = () => {
  return <RdsIconButton icon={RdsIconId.AccountCircle} onClick={(e) => console.log("e", e)} />;
};
