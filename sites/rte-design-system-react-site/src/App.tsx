/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { RdsButton, RdsIconId } from "rte-design-system-react";

import viteLogo from "/vite.svg";
function App() {
  const logger = (key: string) => (e: unknown) => {
    console.log(`🚀 QCA :  ~ ${key} ~ `, e);
  };
  return (
    <div className="grid gap-2">
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <div>
        <p>Button test 1 </p>
        <RdsButton
          color="primary"
          icon={RdsIconId.AccountCircle}
          id="my-id"
          label="Label"
          onClick={logger("onClick 1 ")}
          onKeydown={logger("keyDown 1")}
        />
      </div>
      <div>
        <p>Button test 2 </p>
        <RdsButton
          color="secondary"
          variant="outlined"
          icon={RdsIconId.AccountCircle}
          id="my-id-2"
          label="Label 2"
          onClick={logger("onClick 2 ")}
          onKeydown={logger("keyDown 2")}
        />
      </div>
    </div>
  );
}

export default App;
