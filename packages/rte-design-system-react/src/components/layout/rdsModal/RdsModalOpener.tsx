/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ModalContext } from '@/contexts/modalContext.ts';
import { PropsWithChildren, useContext } from 'react';

type RdsModalOpenerProps = PropsWithChildren<{
  modalKey: string;
}>;

export const RdsModalOpener = ({ modalKey, children }: RdsModalOpenerProps) => {
  const modalContext = useContext(ModalContext);

  const showModal = modalContext.currentModalKey === modalKey;
  if (!showModal) return null;
  return children;
};
