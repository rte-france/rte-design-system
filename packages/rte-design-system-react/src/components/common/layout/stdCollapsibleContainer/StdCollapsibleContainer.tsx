/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { PropsWithChildren, useState } from 'react';
import StdButton from '../../base/stdButton/StdButton';

export type StdCollapsibleContainerProps = {
  defaultVisible?: boolean;
  id?: string;
};

const StdCollapsibleContainer = ({
  id: propsId,
  defaultVisible,
  children,
}: PropsWithChildren<StdCollapsibleContainerProps>) => {
  const id = useStdId('collapsible-container', propsId);
  const [contentVisible, setContentVisible] = useState<boolean>(!!defaultVisible);

  return (
    <div id={id} role="separator">
      {contentVisible && children}
      <div className="flex items-center">
        <hr className="border-t-1 w-full border-gray-300" />
        <StdButton
          id={`${id}-button`}
          variant="transparent"
          size="small"
          color="secondary"
          icon={contentVisible ? StdIconId.KeyboardArrowUp : StdIconId.KeyboardArrowDown}
          onClick={() => setContentVisible((visible) => !visible)}
        />
        <hr className="border-t-1 w-full border-gray-300" />
      </div>
    </div>
  );
};

export default StdCollapsibleContainer;
