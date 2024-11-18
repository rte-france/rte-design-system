/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  FloatingArrow,
  OffsetOptions,
  Placement,
  arrow as arrowMw,
  autoUpdate,
  flip as flipMw,
  offset as offsetMw,
  size as sizeMw,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react';
import { Dispatch, ReactElement, SetStateAction, useRef, useState } from 'react';
import { RdsFloatingElement } from './slots/rdsFloatingElement/RdsFloatingElement.tsx';
import { RdsFloatingTrigger } from './slots/rdsFloatingTrigger/RdsFloatingTrigger.tsx';
import { ZIndex } from '@/types/index.ts';
import { findSlotOfType } from '@/utils/index.ts';
import { useRdsId } from '@/hooks/index.ts';

type RdsFloatingWrapperProps = {
  children: ReactElement | ReactElement[];
  show?: boolean;
  setShow?: Dispatch<SetStateAction<boolean>>;
  placement?: Placement;
  offset?: OffsetOptions;
  fallbackPlacements?: Placement[];
  fitWidth?: boolean;
  disabled?: boolean;
  interactiveMode?: 'click' | 'hover';
  autoClose?: boolean;
  arrowParams?: { enabled: boolean; className?: string };
  id?: string;
  zIndex?: ZIndex;
};

export const TRIGGER_PREFIX_ID = 'trigger-floating';
export const ELEMENT_PREFIX_ID = 'element-floating';

const RdsFloatingWrapperComponent = ({
  children,
  show,
  setShow,
  placement,
  offset,
  fallbackPlacements = ['bottom', 'top', 'left', 'right'],
  fitWidth,
  disabled = false,
  interactiveMode = 'click',
  autoClose = false,
  arrowParams,
  id: idProps,
  zIndex = 'z-50',
}: RdsFloatingWrapperProps) => {
  const [showWrapper, setShowWrapper] = useState<boolean>(false);
  const TriggerComponent = findSlotOfType(children, RdsFloatingTrigger);
  const ElementComponent = findSlotOfType(children, RdsFloatingElement);
  const arrowRef = useRef(null);
  const id = useRdsId('floating', idProps);
  const showFloating = show ?? showWrapper;
  const setShowFloating = setShow ?? setShowWrapper;
  const { context, refs, floatingStyles } = useFloating({
    open: !disabled ? showFloating : false,
    onOpenChange: !disabled ? setShowFloating : undefined,
    whileElementsMounted: autoUpdate,
    placement,
    middleware: [
      flipMw({
        fallbackPlacements,
      }),
      offsetMw(offset),
      fitWidth &&
        sizeMw({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
            });
          },
        }),
      arrowMw({ element: arrowRef }),
    ],
  });

  const click = useClick(context, { enabled: interactiveMode === 'click' });
  const hover = useHover(context, { enabled: interactiveMode === 'hover' });
  const focus = useFocus(context, { enabled: interactiveMode === 'hover' });
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, hover, focus, dismiss]);

  const { isMounted, styles } = useTransitionStyles(context);

  return (
    <>
      <div
        ref={refs.setReference}
        id={`${TRIGGER_PREFIX_ID}-${id}`}
        onBlur={() => autoClose && setShowFloating(false)}
        {...getReferenceProps({ onClick: (e) => e.stopPropagation() })}
      >
        {TriggerComponent}
      </div>
      {isMounted && ElementComponent && (
        <div
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          id={`${ELEMENT_PREFIX_ID}-${id}`}
          onFocus={() => autoClose && setShowFloating(true)}
          onBlur={() => autoClose && setShowFloating(false)}
          onClick={() => autoClose && setShowFloating(false)}
          className={zIndex}
          {...getFloatingProps()}
        >
          {arrowParams?.enabled && (
            <FloatingArrow context={context} ref={arrowRef} className={arrowParams?.className} />
          )}
          {ElementComponent}
        </div>
      )}
    </>
  );
};

export const RdsFloatingWrapper = Object.assign(RdsFloatingWrapperComponent, {
  Trigger: RdsFloatingTrigger,
  Element: RdsFloatingElement,
});
