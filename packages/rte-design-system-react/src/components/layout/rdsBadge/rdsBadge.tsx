/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PropsWithChildren } from 'react';
import { autoUpdate, offset, useFloating } from '@floating-ui/react';
import { DisplayStatus } from '@/types/components/DisplayStatus.type.ts';
import { getDisplayedText } from './badgeTools.ts';
import { useRdsId } from '@/hooks/index.ts';
import { badgeClassBuilder } from './badgeClassBuilder.ts';

type RdsBadgeProps = {
  badgeValue?: number;
  size?: BadgeSize;
  status?: DisplayStatus;
  id?: string;
};

export type BadgeSize = 'extraSmall' | 'small' | 'medium';

export const RdsBadge = ({
  children,
  badgeValue = 0,
  size = 'extraSmall',
  status = 'info',
  id: propsId,
}: PropsWithChildren<RdsBadgeProps>) => {
  const { refs, floatingStyles } = useFloating({
    placement: 'right-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(({ rects }) => ({
        mainAxis: -rects.floating.width / 2,
        crossAxis: -rects.floating.height / 2,
      })),
    ],
  });

  const displayedText = getDisplayedText(badgeValue);
  const id = useRdsId('badge', propsId);
  const badgeClasses = badgeClassBuilder(size, status, badgeValue);

  return (
    <div className="rds-h-fit rds-w-fit" ref={refs.setReference}>
      {children}
      <div role="note" ref={refs.setFloating} style={floatingStyles} id={id} className={badgeClasses}>
        {displayedText}
      </div>
    </div>
  );
};
