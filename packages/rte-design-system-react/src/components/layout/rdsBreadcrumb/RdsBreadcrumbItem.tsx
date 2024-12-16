/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useActiveKeyboard, useRdsId } from '@/hooks/index.ts';
import { breadcrumbItemClassBuilder } from './breadcrumItemClassBuilder.ts';
import { Link } from 'react-router-dom';

export interface RdsBreadcrumbItemProps {
  label: string;
  target: string;
  id?: string;
}

export const RdsBreadcrumbItem = ({ label, target, id: propsId }: RdsBreadcrumbItemProps) => {
  const id = useRdsId('breadcrumb-item', propsId);
  const { isActiveKeyboard } = useActiveKeyboard<HTMLAnchorElement>(undefined, {
    id,
    interactiveKeyCodes: ['Enter'],
  });

  return (
    <Link to={target} className={breadcrumbItemClassBuilder(isActiveKeyboard)} id={id}>
      <span className="rds-p-0.125 rds-text-button-m">{label}</span>
    </Link>
  );
};
