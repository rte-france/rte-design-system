/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from "@/hooks/useStdId";
import { MenuNavItem } from "@/shared/types/MenuNavItem.type";
import { TailwindColorClass } from "@/shared/types/TailwindColorClass.type";
import { PropsWithChildren, useState } from "react";
import { useTranslation } from "react-i18next";
import StdDivider from "../stdDivider/StdDivider";
import StdNavbarController from "./StdNavbarController";
import StdNavbarLogoHeader from "./StdNavbarLogoHeader";
import StdNavbarMenu from "./StdNavbarMenu";
import StdNavbarTextHeader from "./StdNavbarTextHeader";
import { navbarClassBuilder } from "./navbarClassBuilder";

export type NavbarConfig = {
  header: HeaderStyleConfig;
  itemContent?: ItemStyleConfig;
  itemBackground?: ItemStyleConfig;
  separatorColor?: TailwindColorClass;
  textColor?: TailwindColorClass;
};

export type LogoConfig = {
  logoExpandedHref: string;
  logoExpandedId: string;
  logoCollapsedHref: string;
  logoCollapsedId: string;
};

type HeaderCommonConfig = {
  versionTextColor: TailwindColorClass;
  appName: string;
  appVersion: string;
  headerLink: string;
  headerId: string;
};

export type HeaderStyleLogoConfig = {
  variant: "logo";
  logoConfig: LogoConfig;
} & HeaderCommonConfig;

export type HeaderStyleTextConfig = {
  variant: "text";
  appTwoLetters: string;
  twoLettersBackground?: TailwindColorClass;
  twoLettersColor?: TailwindColorClass;
} & HeaderCommonConfig;

export type HeaderStyleConfig = HeaderStyleLogoConfig | HeaderStyleTextConfig;

export type ItemStyleConfig = {
  main: TailwindColorClass;
  hover?: TailwindColorClass;
  active?: TailwindColorClass;
  selected?: TailwindColorClass;
};

export type StdNavbarProps = {
  topItems: MenuNavItem[];
  bottomItems: MenuNavItem[];
  headerLink: string;
  config: NavbarConfig;
  id?: string;
};

const StdNavbar = ({
  topItems,
  bottomItems,
  id: propsId,
  config,
}: PropsWithChildren<StdNavbarProps>) => {
  const [expanded, setExpanded] = useState(true);
  const { t } = useTranslation();

  const toggleExpanded = () => {
    setExpanded((oldExpanded) => !oldExpanded);
  };

  const backgroundColor = config.itemBackground?.main;
  const { separatorColor, textColor, itemContent, itemBackground } = config;

  const navbarClasses = navbarClassBuilder(
    expanded,
    backgroundColor,
    separatorColor,
    textColor
  );
  const id = useStdId("navbar", propsId);
  const controllerId = `${id}-controller`;
  const headerId = `${id}-header`;
  const controllerLabel = expanded
    ? t("components.navbar.@minimize")
    : t("components.navbar.@expand");

  return (
    <nav className={navbarClasses} id={id} aria-label={config.header.appName}>
      {config.header.variant === "text" ? (
        <StdNavbarTextHeader
          id={headerId}
          expanded={expanded}
          headerConfig={config.header}
        />
      ) : (
        <StdNavbarLogoHeader
          id={headerId}
          expanded={expanded}
          headerConfig={config.header}
        />
      )}
      <StdNavbarMenu
        menuItems={topItems}
        expanded={expanded}
        itemsStyleConfig={{ itemBackground, itemContent }}
      />

      <StdDivider extraClasses="mt-auto" />
      <StdNavbarMenu
        menuItems={bottomItems}
        expanded={expanded}
        itemsStyleConfig={{ itemBackground, itemContent }}
      />
      <StdDivider />
      <StdNavbarController
        action={toggleExpanded}
        id={controllerId}
        label={controllerLabel}
        expanded={expanded}
        itemsStyleConfig={{ itemBackground, itemContent }}
      />
    </nav>
  );
};

export default StdNavbar;
