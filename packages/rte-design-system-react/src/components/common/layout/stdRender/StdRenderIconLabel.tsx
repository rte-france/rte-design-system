/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdIcon from '@common/base/stdIcon/StdIcon';
import { renderIconLabelClassBuilder } from './StdRenderClassBuilder';
import StdRenderLabel, { StdRenderLabelProps } from './StdRenderLabel';

export type StdRenderIconLabelProps = {
  icon: StdIconId;
  iconClassName?: React.ComponentProps<'div'>['className'];
} & StdRenderLabelProps;

const ICON_SIZE = 16;

const StdRenderIconLabel = ({ icon, iconClassName = '', ...labelProps }: StdRenderIconLabelProps) => {
  const className = renderIconLabelClassBuilder();
  return (
    <div className={className.container} tabIndex={0}>
      <div className={iconClassName}>
        <StdIcon name={icon} width={ICON_SIZE} height={ICON_SIZE} />
      </div>
      <StdRenderLabel {...labelProps} />
    </div>
  );
};

export default StdRenderIconLabel;
