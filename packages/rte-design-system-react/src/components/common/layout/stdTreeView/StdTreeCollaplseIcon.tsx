/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { valueOf } from '@/shared/types';
import { stopPropagation } from '@/shared/utils/event/stopPropagation';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdButton from '@common/base/stdButton/StdButton';
import StdExpandIcon from './StdExpandIcon';
import { TreeCollapseIcon as treeCollapseIcon } from './TreeType';
import { treeCollaplseIconClassBuilder } from './treeViewClassBuilder';

type StdTreeCollaplseIconProps = {
  iconType: valueOf<typeof treeCollapseIcon>;
  onClick: () => void;
};

const StdTreeCollaplseIcon = (props: StdTreeCollaplseIconProps) => {
  const { iconType } = props;
  const className = treeCollaplseIconClassBuilder();

  const handleKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };
  if (iconType === treeCollapseIcon.Collapse) {
    return (
      <div className="relative h-4 min-w-2 cursor-pointer">
        <div className={className.container}>
          <StdButton
            icon={StdIconId.KeyboardArrowRight}
            variant="contained"
            color="secondary"
            size="extraSmall"
            onClick={(e) => stopPropagation(e, props.onClick)}
            onKeydown={handleKeydown}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-4 min-w-2 cursor-pointer">
      <div className={className.container}>
        <StdButton
          onClick={(e) => stopPropagation(e, props.onClick)}
          onKeydown={handleKeydown}
          icon={StdIconId.KeyboardArrowDown}
          variant="contained"
          color="secondary"
          size="extraSmall"
        />
      </div>
      <StdExpandIcon />
    </div>
  );
};

export default StdTreeCollaplseIcon;
