/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Placement } from '@floating-ui/react';
import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { RdsFloatingWrapper } from '../rdsFloatingWrapper/RdsFloatingWrapper.tsx';
import { RdsTooltip } from '../rdsTooltip/RdsTooltip.tsx';

const { Trigger, Element } = RdsFloatingWrapper;

export type RdsTextTooltipProps = {
  text: string;
  placement?: Placement;
  fallbackPlacement?: Placement[];
  offset?: number;
  enabled?: boolean;
  show?: boolean;
  setShow?: Dispatch<SetStateAction<boolean>>;
  disableArrow?: boolean;
  id?: string;
};

export const RdsTextTooltip = ({
  text,
  placement,
  fallbackPlacement,
  offset,
  enabled = true,
  show,
  setShow,
  disableArrow,
  children,
  id,
}: PropsWithChildren<RdsTextTooltipProps>) => (
  <RdsFloatingWrapper
    show={show}
    setShow={setShow}
    interactiveMode="hover"
    placement={placement}
    fallbackPlacements={fallbackPlacement}
    offset={offset}
    arrowParams={{ enabled: !disableArrow, className: 'fill-gray-800' }}
  >
    <Trigger>{children}</Trigger>
    {enabled ? (
      <Element>
        <RdsTooltip id={id}>{text}</RdsTooltip>
      </Element>
    ) : (
      <></>
    )}
  </RdsFloatingWrapper>
);
