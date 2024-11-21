/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { RdsButton } from "rte-design-system-react";

export const MainFrame = () => {
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          justifyContent: "space-around",
        }}
      >
        <h1>MainFrame</h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          <RdsButton onClick={() => handleClick("/layout")} label="Layout" />
          <RdsButton onClick={() => handleClick("/forms")} label="Forms" />
          <RdsButton onClick={() => handleClick("/data")} label="Data" />
          <RdsButton onClick={() => handleClick("/base")} label="Base" />
        </div>
      </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MainFrame;
