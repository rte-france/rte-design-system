/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsDivider } from '@/components/index.ts';
import { NavbarContext } from '../rdsNavbar/navbarContext.ts';
import { useState } from 'react';
import { navbarClassBuilder } from './navbarClassBuilder.ts';

type NavbarProps = {
  header: React.ReactElement;
  item: React.ReactElement;
  footer: React.ReactElement;
};
export const RdsNavbar = (props: NavbarProps) => {
  const { header, item, footer } = props;
  const [expanded, setExpanded] = useState(false);
  const classes = navbarClassBuilder(expanded);
  return (
    <nav className={classes.base}>
      <NavbarContext.Provider value={{ expanded, setExpanded }}>
        <header>{header}</header>
        <RdsDivider />
        <section className={classes.top}>{item}</section>
        <RdsDivider />
        <footer>{footer}</footer>
      </NavbarContext.Provider>
    </nav>
  );
};
