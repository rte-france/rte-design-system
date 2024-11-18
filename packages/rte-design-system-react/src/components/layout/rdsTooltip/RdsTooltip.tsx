/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { PropsWithChildren } from 'react';

type RdsTooltipProps = {
  id?: string;
};

const TOOLTIP_CLASSES =
  'rds-rounded rds-bg-gray-800 rds-px-1 rds-py-0.5 rds-text-caption rds-font-semibold rds-text-gray-w rds-shadow-4';

export const RdsTooltip = ({ children, id: idProps }: PropsWithChildren<RdsTooltipProps>) => {
  const id = useRdsId('tooltip', idProps);
  return (
    <div className={TOOLTIP_CLASSES} role="tooltip" id={id}>
      {children}
    </div>
  );
};
