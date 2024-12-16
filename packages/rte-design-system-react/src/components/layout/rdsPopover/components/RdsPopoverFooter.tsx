/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PropsWithChildren } from 'react';

export const RdsPopoverFooter = ({ children }: PropsWithChildren) => (
  <footer className="rds-flex rds-justify-end" role="group">
    {children}
  </footer>
);
