/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { navbarHeaderClassBuilder } from './navbarClassBuilder.ts';
import { HeaderStyleTextConfig } from './navbar.type.tsx';

type StdNavbarTextHeaderProps = {
  id: string;
  expanded?: boolean;
  headerConfig: HeaderStyleTextConfig;
};

const WRAPPER_COMMON_CLASSES = 'rds-m-1 rds-mt-2 rds-rounded rds-flex rds-items-center rds-gap-1 rds-p-1';
const WRAPPER_FOCUS_CLASSES =
  'focus-visible:rds-outline focus-visible:rds-outline-1 focus-visible:rds-outline-offset-0 focus-visible:rds-outline-gray-900';

export const RdsNavbarTextHeader = ({ id, expanded = true, headerConfig }: StdNavbarTextHeaderProps) => {
  const { headerLink, appName, appTwoLetters, appVersion } = headerConfig;
  const { twoLettersClasses, versionClasses } = navbarHeaderClassBuilder(headerConfig);

  return (
    <Link to={headerLink} className={clsx(WRAPPER_COMMON_CLASSES, WRAPPER_FOCUS_CLASSES)} id={id}>
      <div className={twoLettersClasses}>{appTwoLetters}</div>
      {expanded && (
        <>
          <div className="rds-text-heading-xs rds-font-semibold">{appName}</div>
          <div className={versionClasses}>{appVersion}</div>
        </>
      )}
    </Link>
  );
};
