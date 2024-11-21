/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { navbarClassBuilder } from './navbarClassBuilder.ts';
import { NO_PREFIX } from '@/types/TailwindColorClass.type.ts';
import { PropsWithChildren, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuNavItem } from '@/types/template/menuNavItem.type.ts';
import { NavbarConfig } from './navbar.type.tsx';
import { RdsNavbarTextHeader } from './RdsNavbarTextHeader.tsx';
import { RdsNavbarLogoHeader } from './RdsNavbarLogoHeader.tsx';
import { NavbarContext } from './navbarContext.ts';
import { RdsDivider } from '@/components/layout/rdsDivider/RdsDivider.tsx';
import { RdsNavbarMenu } from './RdsNavbarMenu.tsx';
import { RdsNavbarController } from './RdsNavbarController.tsx';

export type RdsNavbarProps = {
  topItems: MenuNavItem[];
  bottomItems: MenuNavItem[];
  headerLink: string;
  config: NavbarConfig;
  id?: string;
};

export const RdsNavbar = ({
  topItems,
  bottomItems,
  id: propsId,
  config,
  children,
}: PropsWithChildren<RdsNavbarProps>) => {
  const [expanded, setExpanded] = useState(true);
  const { t } = useTranslation();

  const toggleExpanded = () => {
    setExpanded((oldExpanded) => !oldExpanded);
  };

  const backgroundColor = config.itemBackground?.[NO_PREFIX];
  const { separatorColor, textColor, itemContent, itemBackground } = config;

  const navbarClasses = navbarClassBuilder(expanded, backgroundColor, separatorColor, textColor);
  const id = useRdsId('navbar', propsId);
  const controllerId = `${id}-controller`;
  const headerId = `${id}-header`;
  const controllerLabel = expanded ? t('components.navbar.@minimize') : t('components.navbar.@expand');

  return (
    <nav className={navbarClasses} id={id} aria-label={config.header.appName}>
      {config.header.variant === 'text' ? (
        <RdsNavbarTextHeader id={headerId} expanded={expanded} headerConfig={config.header} />
      ) : (
        <RdsNavbarLogoHeader id={headerId} expanded={expanded} headerConfig={config.header} />
      )}
      <RdsNavbarMenu menuItems={topItems} expanded={expanded} itemsStyleConfig={{ itemBackground, itemContent }} />

      <NavbarContext.Provider value={{ expanded, setExpanded, config }}>{children}</NavbarContext.Provider>

      <RdsDivider extraClasses="mt-auto" />
      <RdsNavbarMenu menuItems={bottomItems} expanded={expanded} itemsStyleConfig={{ itemBackground, itemContent }} />
      <RdsDivider />
      <RdsNavbarController
        action={toggleExpanded}
        id={controllerId}
        label={controllerLabel}
        expanded={expanded}
        itemsStyleConfig={{ itemBackground, itemContent }}
      />
    </nav>
  );
};
