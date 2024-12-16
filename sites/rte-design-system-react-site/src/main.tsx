/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Bases from './uiTest/Bases.tsx';
import Data from './uiTest/Data.tsx';
import Forms from './uiTest/Forms.tsx';
import Layout from './uiTest/Layout.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <span>Empty</span>,
      },
      {
        path: 'bases',
        element: <Bases />,
      },
      {
        path: 'forms',
        element: <Forms />,
      },
      {
        path: 'data',
        element: <Data />,
      },
      {
        path: 'layout',
        element: <Layout />,
      },
      {
        path: '*',
        element: <span>404</span>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);

document.documentElement.style.setProperty('--colors-primary-50', '#f9f7fc');
document.documentElement.style.setProperty('--colors-primary-100', '#f3eff8');
document.documentElement.style.setProperty('--colors-primary-200', '#e6def0');
document.documentElement.style.setProperty('--colors-primary-300', '#d2c3e4');
document.documentElement.style.setProperty('--colors-primary-400', '#b89fd3');
document.documentElement.style.setProperty('--colors-primary-500', '#9979bc');
document.documentElement.style.setProperty('--colors-primary-600', '#7d5a9f');
document.documentElement.style.setProperty('--colors-primary-700', '#674883');
document.documentElement.style.setProperty('--colors-primary-800', '#563c6c');
document.documentElement.style.setProperty('--colors-primary-900', '#4a355a');
document.documentElement.style.setProperty('--colors-primary-950', '#2b1a38');
