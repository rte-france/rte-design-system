/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { HeaderStyleLogoConfig } from './StdNavbar';
import { navbarHeaderClassBuilder } from './navbarClassBuilder';

type StdNavbarHeaderProps = {
  id: string;
  headerConfig: HeaderStyleLogoConfig;
  expanded?: boolean;
};

const WRAPPER_COMMON_CLASSES = 'm-1 mt-2 rounded flex items-center gap-0.5 p-1';
const WRAPPER_FOCUS_CLASSES =
  'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-gray-900';

const StdNavbarLogoHeader = ({ id, headerConfig, expanded = true }: StdNavbarHeaderProps) => {
  const { logoConfig, headerLink, appName, appVersion } = headerConfig;
  const { versionClasses } = navbarHeaderClassBuilder(headerConfig);

  return (
    <Link to={headerLink} className={clsx(WRAPPER_COMMON_CLASSES, WRAPPER_FOCUS_CLASSES)} id={id}>
      {expanded ? (
        <>
          <div className="h-4">
            <img src={logoConfig.logoExpandedHref} id={logoConfig.logoExpandedId} alt={appName} />
          </div>
          <div className={versionClasses}>{appVersion}</div>
        </>
      ) : (
        <div className="h-4 py-0.25">
          <img src={logoConfig.logoCollapsedHref} id={logoConfig.logoCollapsedId} alt={appName} />
        </div>
      )}
    </Link>
  );
};

export default StdNavbarLogoHeader;
