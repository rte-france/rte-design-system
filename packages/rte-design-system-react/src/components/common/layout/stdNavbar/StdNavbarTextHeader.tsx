/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { HeaderStyleTextConfig } from './StdNavbar';
import { navbarHeaderClassBuilder } from './navbarClassBuilder';

type StdNavbarTextHeaderProps = {
  id: string;
  expanded?: boolean;
  headerConfig: HeaderStyleTextConfig;
};

const WRAPPER_COMMON_CLASSES = 'm-1 mt-2 rounded flex items-center gap-1 p-1';
const WRAPPER_FOCUS_CLASSES =
  'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-gray-900';

const StdNavbarTextHeader = ({ id, expanded = true, headerConfig }: StdNavbarTextHeaderProps) => {
  const { headerLink, appName, appTwoLetters, appVersion } = headerConfig;
  const { twoLettersClasses, versionClasses } = navbarHeaderClassBuilder(headerConfig);

  return (
    <Link to={headerLink} className={clsx(WRAPPER_COMMON_CLASSES, WRAPPER_FOCUS_CLASSES)} id={id}>
      <div className={twoLettersClasses}>{appTwoLetters}</div>
      {expanded && (
        <>
          <div className="text-heading-xs font-semibold">{appName}</div>
          <div className={versionClasses}>{appVersion}</div>
        </>
      )}
    </Link>
  );
};

export default StdNavbarTextHeader;
