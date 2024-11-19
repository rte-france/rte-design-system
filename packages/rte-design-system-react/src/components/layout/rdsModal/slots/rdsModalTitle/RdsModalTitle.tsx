/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PropsWithChildren, ReactNode, useEffect, useRef } from 'react';
import modalTitleClassBuilder from './modalTitleClassBuilder.ts';
import { RdsButton, RdsIcon } from '@/components/base/index.ts';
import { RdsIconId, RdsIconIdKey } from '@/utils/index.ts';
import useModal from '../../../../../hooks/modal/useModal.ts';

export type RdsModalTitleStatus = 'default' | 'danger';

type RdsModalTitleProps = {
  onClose?: () => void;
  status?: RdsModalTitleStatus;
  icon?: RdsIconIdKey;
  customIcon?: ReactNode;
  disabledAutoFocus?: boolean;
};

export const RdsModalTitle = ({
  icon,
  status = 'default',
  onClose: onCloseProps,
  customIcon,
  disabledAutoFocus,
  children,
}: PropsWithChildren<RdsModalTitleProps>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { closeModal } = useModal();
  const onClose = onCloseProps ?? closeModal;
  const { containerClasses, iconColor, childrenClasses } = modalTitleClassBuilder(status);

  useEffect(() => {
    if (!disabledAutoFocus) {
      buttonRef.current?.focus();
      buttonRef.current?.blur();
    }
  }, [disabledAutoFocus]);

  return (
    <header className={containerClasses}>
      {customIcon ? (
        <div>{customIcon}</div>
      ) : (
        icon && (
          <div>
            <RdsIcon name={icon} color={iconColor} />
          </div>
        )
      )}
      <div className={childrenClasses}>{children}</div>
      <RdsButton
        icon={RdsIconId.Close}
        color="secondary"
        variant="transparent"
        onClick={onClose ?? closeModal}
        ref={buttonRef}
      />
    </header>
  );
};
