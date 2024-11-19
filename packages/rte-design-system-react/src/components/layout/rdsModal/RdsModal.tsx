/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { findSlotOfType } from '@/utils/index.ts';
import { ReactElement } from 'react';
import { RdsModalTitle } from './slots/rdsModalTitle/RdsModalTitle.tsx';
import { RdsModalContent } from './slots/rdsModalContents/RdsModalContent.tsx';
import { RdsModalLateralContent } from './slots/rdsModalContents/RdsModalLateralContent.tsx';
import { RdsModalFooter } from './slots/rdsModalFooter/RdsModalFooter.tsx';
import { modalClassBuilder } from './modalClassBuilder.ts';
import { RdsModalProps, RdsModalWrapper } from '../rdsModalWrapper/RdsModalWrapper.tsx';

export type ModalSize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';

export type RdsModalComponentProps = RdsModalProps & {
  children?: ReactElement | ReactElement[];
  size?: ModalSize;
  id?: string;
};

export const RdsModalComponent = ({ onClose, size, children = undefined, id: propsId }: RdsModalComponentProps) => {
  const id = useRdsId('modal', propsId);
  const TitleComponent = findSlotOfType(children, RdsModalTitle);
  const ContentComponent = findSlotOfType(children, RdsModalContent);
  const LateralContentComponent = findSlotOfType(children, RdsModalLateralContent);
  const FooterComponent = findSlotOfType(children, RdsModalFooter);

  return (
    <RdsModalWrapper onClose={onClose}>
      <div className={modalClassBuilder(size)} id={id}>
        {LateralContentComponent}
        <div className="flex grow flex-col gap-2">
          {TitleComponent}
          {ContentComponent}
          {FooterComponent}
        </div>
      </div>
    </RdsModalWrapper>
  );
};

const RdsModal = Object.assign(RdsModalComponent, {
  Title: RdsModalTitle,
  Content: RdsModalContent,
  LateralContent: RdsModalLateralContent,
  Footer: RdsModalFooter,
});

export default RdsModal;
