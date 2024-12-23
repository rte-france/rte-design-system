/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import useModal from '@/hooks/modal/useModal.ts';
import { MouseEventHandler, PropsWithChildren, useEffect, useMemo, useRef } from 'react';
import modalWrapperClassBuilder from './modalClassBuilder.ts';
import { createPortal } from 'react-dom';
import useFocusTrapping from '@/hooks/modal/useFocusTrapping.ts';

export type RdsModalProps = {
  onClose?: () => void;
  element?: HTMLElement;
};

export const RdsModalWrapper = ({ onClose: onCloseProps, children }: PropsWithChildren<RdsModalProps>) => {
  const { closeModal } = useModal();
  const onClose = onCloseProps ?? closeModal;
  const mouseDownRef = useRef<boolean>(false);
  useEffect(() => {
    mouseDownRef.current = false;
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const { containerClasses, subContainerClasses, modalClasses } = modalWrapperClassBuilder();

  const handlesCloseModal = useMemo(
    () => ({
      onMouseDown: () => {
        mouseDownRef.current = true;
      },
      onMouseUp: () => {
        if (mouseDownRef.current) {
          onClose?.();
          return;
        }
        mouseDownRef.current = false;
      },
    }),
    [onClose],
  );

  const stopPropagation: Record<string, MouseEventHandler<HTMLDivElement>> = useMemo(
    () => ({
      onMouseDown: (e) => {
        mouseDownRef.current = false;
        e.stopPropagation();
      },
      onMouseUp: (e) => {
        mouseDownRef.current = false;
        e.stopPropagation();
      },
    }),
    [],
  );

  const containerElementRef = useRef<HTMLDivElement>(null);
  useFocusTrapping(containerElementRef, true);

  return createPortal(
    <div className={containerClasses} {...handlesCloseModal} ref={containerElementRef}>
      <div className={subContainerClasses}>
        <div className={modalClasses} aria-modal="true" role="dialog" {...stopPropagation}>
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};
