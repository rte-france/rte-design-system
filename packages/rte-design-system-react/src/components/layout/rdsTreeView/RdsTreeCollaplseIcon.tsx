/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { valueOf } from '@/types/Generic.type.ts';
import { TreeCollapseIcon } from './TreeType.ts';
import { treeCollaplseIconClassBuilder } from './treeViewClassBuilder.ts';
import { RdsButton } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { stopPropagation } from '@/utils/event/stopPropagation.ts';
import { RdsExpandIcon } from './RdsExpandIcon.tsx';

type RdsTreeCollaplseIconProps = {
  iconType: valueOf<typeof TreeCollapseIcon>;
  onClick: () => void;
};

export const RdsTreeCollaplseIcon = (props: RdsTreeCollaplseIconProps) => {
  const { iconType, onClick } = props;
  const className = treeCollaplseIconClassBuilder();

  const handleKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ') {
      event.preventDefault();
    }
  };
  if (iconType === TreeCollapseIcon.Collapse) {
    return (
      <div className="rds-relative rds-h-4 rds-min-w-2 rds-cursor-pointer">
        <div className={className.container}>
          <RdsButton
            icon={RdsIconId.KeyboardArrowRight}
            variant="contained"
            color="secondary"
            size="extraSmall"
            onClick={stopPropagation(onClick)}
            onKeydown={handleKeydown}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="rds-relative rds-h-4 rds-min-w-2 rds-cursor-pointer">
      <div className={className.container}>
        <RdsButton
          onClick={stopPropagation(onClick)}
          onKeydown={handleKeydown}
          icon={RdsIconId.KeyboardArrowDown}
          variant="contained"
          color="secondary"
          size="extraSmall"
        />
      </div>
      <RdsExpandIcon />
    </div>
  );
};

export default RdsTreeCollaplseIcon;
