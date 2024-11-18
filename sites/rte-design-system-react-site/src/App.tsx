/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { RdsButton, RdsIcon, RdsIconId } from "rte-design-system-react";

import viteLogo from "/vite.svg";
function App() {
  const logger = (key: string) => (e: unknown) => {
    console.log(`🚀 QCA :  ~ ${key} ~ `, e);
  };
  return (
    <div className="rds-bg-primary-100 rds-grid rds-gap-10 ">
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <RdsIcon width={24} height={24} name={RdsIconId.Badge} />
      <div style={{ display: "grid", gridTemplateColumns: "100px 100px 100px 100px" }}>
        {Object.values(RdsIconId).map((icon) => (
          <div style={{ flex: "1 1 auto", border: "solid" }}>
            <p>{icon}</p>
            <div style={{ height: "24px", width: "24px", margin: "1px" }}>
              <RdsIcon width={24} height={24} name={icon} />
            </div>
          </div>
        ))}
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
