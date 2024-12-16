/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { paginationButtonClassBuilder } from './paginationButtonClassBuilder.ts';

export interface RdsPaginationButtonProps {
  id?: string;
  value: number;
  active?: boolean;
  onClick: () => void;
}

export const RdsPaginationButton = ({ id: propsId, value, active, onClick }: RdsPaginationButtonProps) => {
  const { buttonClasses, numberClasses } = paginationButtonClassBuilder(!!active);
  const id = useRdsId('pagination-btn', propsId);

  return (
    <button className={buttonClasses} onClick={onClick} onMouseDown={(e) => e.preventDefault()} id={id} type="button">
      <div className={numberClasses}>{value}</div>
    </button>
  );
};
