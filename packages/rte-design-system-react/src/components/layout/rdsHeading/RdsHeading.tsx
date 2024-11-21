/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { headingClassBuilder } from './headingClassBuilder.ts';

type RdsHeadingProps = {
  title: string;
  level?: HeadingLevel;
  size?: HeadingSize;
  weight?: HeadingWeight;
  id?: string;
};

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = 'xl' | 'l' | 'm' | 's' | 'xs';
export type HeadingWeight = 'regular' | 'semibold';

export const RdsHeading = ({ title, level = 'h2', size = 'l', weight = 'semibold', id: propsId }: RdsHeadingProps) => {
  const id = useRdsId('heading', propsId);
  const HeadingComponent = level;
  const headingClasses = headingClassBuilder(size, weight);

  return (
    <div className="header" id={id}>
      <HeadingComponent className={headingClasses}>{title}</HeadingComponent>
      <hr className="rds-w-9 rds-border-t-2 rds-border-primary-600" />
    </div>
  );
};
