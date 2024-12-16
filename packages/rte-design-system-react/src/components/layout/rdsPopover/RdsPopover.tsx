/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Placement } from '@floating-ui/react';
import { Dispatch, ReactElement, SetStateAction } from 'react';
import { RdsFloatingWrapper } from '../rdsFloatingWrapper/RdsFloatingWrapper.tsx';
import { useRdsId } from '@/hooks/index.ts';
import { RdsPopoverTrigger } from './components/RdsPopoverTrigger.tsx';
import { RdsPopoverContent } from './components/RdsPopoverContent.tsx';
import { RdsPopoverFooter } from './components/RdsPopoverFooter.tsx';
import { findSlotOfType } from '@/utils/common/dom/slotsUtils.ts';

const { Trigger, Element } = RdsFloatingWrapper;

export type RdsPopoverComponentProps = {
  children: ReactElement | ReactElement[];
  placement?: Placement;
  fallbackPlacement?: Placement[];
  offset?: number;
  enabled?: boolean;
  show?: boolean;
  setShow?: Dispatch<SetStateAction<boolean>>;
  disableArrow?: boolean;
  id?: string;
};

const allPossiblePlacements: Placement[] = [
  'top',
  'right',
  'bottom',
  'left',
  'left-start',
  'left-end',
  'right-start',
  'right-end',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
];

const RdsPopoverComponent = ({
  children,
  placement,
  fallbackPlacement,
  offset,
  show,
  setShow,
  disableArrow,
  id: propsId,
}: RdsPopoverComponentProps) => {
  const id = useRdsId('popover', propsId);
  const TriggerComponent = findSlotOfType(children, RdsPopoverTrigger);
  const ContentComponent = findSlotOfType(children, RdsPopoverContent);
  const FooterComponent = findSlotOfType(children, RdsPopoverFooter);

  return (
    <RdsFloatingWrapper
      show={show}
      setShow={setShow}
      interactiveMode="click"
      placement={placement}
      fallbackPlacements={fallbackPlacement ?? allPossiblePlacements}
      offset={offset}
      arrowParams={{ enabled: !disableArrow, className: 'rds-fill-gray-w' }}
      id={id}
    >
      <Trigger>{TriggerComponent}</Trigger>
      <Element>
        <div className="rds-flex rds-flex-col rds-gap-2 rds-rounded rds-bg-gray-w rds-p-2 rds-shadow-4" role="popover">
          {ContentComponent}
          {FooterComponent}
        </div>
      </Element>
    </RdsFloatingWrapper>
  );
};

export const RdsPopover = Object.assign(RdsPopoverComponent, {
  Trigger: RdsPopoverTrigger,
  Content: RdsPopoverContent,
  Footer: RdsPopoverFooter,
});
