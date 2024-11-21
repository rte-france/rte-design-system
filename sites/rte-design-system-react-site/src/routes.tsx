/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { createBrowserRouter } from "react-router-dom";
import MainFrame from "./pages/MainFrame";
import { lazy } from "react";
const BaseFrame = lazy(() => import("./pages/BaseFrame"));
const DataFrame = lazy(() => import("./pages/DataFrame"));
const FormsFrame = lazy(() => import("./pages/FormsFrame"));
const LayoutFrame = lazy(() => import("./pages/LayoutFrame"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainFrame />,
      children: [
        {
          path: "base",
          element: <BaseFrame />,
        },
        {
          path: "data",
          element: <DataFrame />,
        },
        {
          path: "forms",
          element: <FormsFrame />,
        },
        {
          path: "layout",
          element: <LayoutFrame />,
        },
      ],
    },
  ],
  { basename: "" }
);
