/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import useActiveKeyboard from '@/hooks/useActiveKeyboard';
import { useStdId } from '@/hooks/useStdId';
import { Link } from 'react-router-dom';
import { breadcrumbItemClassBuilder } from './breadcrumItemClassBuilder';

const noop = () => {};
export interface StdBreadcrumbItemProps {
  label: string;
  target: string;
  id?: string;
}

const StdBreadcrumbItem = ({ label, target, id: propsId }: StdBreadcrumbItemProps) => {
  const id = useStdId('breadcrumb-item', propsId);
  const [handlerKeyboardEvent, isActiveKeyboard] = useActiveKeyboard<HTMLAnchorElement>(noop, {
    id,
    interactiveKeyCodes: ['Enter'],
  });

  return (
    <Link to={target} className={breadcrumbItemClassBuilder(isActiveKeyboard)} id={id} {...handlerKeyboardEvent}>
      <span className="p-0.125 text-button-m">{label}</span>
    </Link>
  );
};

export default StdBreadcrumbItem;
