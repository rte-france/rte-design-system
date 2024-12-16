/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PropsWithChildren } from 'react';
import modalFooterClassBuilder from './modalFooterClassBuilder.ts';
import { RdsIcon } from '@/components/base/index.ts';
import { RdsIconIdKey } from '@/utils/index.ts';

export type RdsFooterInformation = {
  icon: RdsIconIdKey;
  text: string;
};
type RdsModalFooterProps = {
  info?: RdsFooterInformation;
};

const ICON_SIZE = 16;

export const RdsModalFooter = ({ children, info }: PropsWithChildren<RdsModalFooterProps>) => {
  const { containerClasses, childrenClasses, infoClasses } = modalFooterClassBuilder();
  return (
    <footer className={containerClasses} role="group">
      <div className={childrenClasses}>{children}</div>

      {info && (
        <span className={infoClasses} role="note">
          <RdsIcon name={info.icon} width={ICON_SIZE} height={ICON_SIZE} />
          {info.text}
        </span>
      )}
    </footer>
  );
};
