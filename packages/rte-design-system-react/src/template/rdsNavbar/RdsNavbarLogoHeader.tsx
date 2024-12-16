/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { navbarHeaderClassBuilder } from './navbarClassBuilder.ts';
import { HeaderStyleLogoConfig } from './navbar.type.tsx';

type RdsNavbarHeaderProps = {
  id: string;
  headerConfig: HeaderStyleLogoConfig;
  expanded?: boolean;
};

const WRAPPER_COMMON_CLASSES = 'rds-m-1 rds-mt-2 rds-rounded rds-flex rds-items-center rds-gap-0.5 rds-p-1';
const WRAPPER_FOCUS_CLASSES =
  'focus-visible:rds-outline focus-visible:rds-outline-1 focus-visible:rds-outline-offset-0 focus-visible:rds-outline-gray-900';

export const RdsNavbarLogoHeader = ({ id, headerConfig, expanded = true }: RdsNavbarHeaderProps) => {
  const { logoConfig, headerLink, appName, appVersion } = headerConfig;
  const { versionClasses } = navbarHeaderClassBuilder(headerConfig);

  return (
    <Link to={headerLink} className={clsx(WRAPPER_COMMON_CLASSES, WRAPPER_FOCUS_CLASSES)} id={id}>
      {expanded ? (
        <>
          <div className="rds-h-4">
            <img src={logoConfig.logoExpandedHref} id={logoConfig.logoExpandedId} alt={appName} />
          </div>
          <div className={versionClasses}>{appVersion}</div>
        </>
      ) : (
        <div className="rds-h-4 rds-py-0.25">
          <img src={logoConfig.logoCollapsedHref} id={logoConfig.logoCollapsedId} alt={appName} />
        </div>
      )}
    </Link>
  );
};
