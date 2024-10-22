/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import StdIcon from '@/components/common/base/stdIcon/StdIcon';
import { useStdId } from '@/hooks/useStdId';
import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import { progressBarClassBuilder } from './progressBarClassBuilder';

type StdProgressBarProps = {
  label: string;
  percent: number;
  state?: ProgressBarState;
  counterPlacement?: ProgressBarCounterPlacement;
  errorMsg?: string;
  id?: string;
};

export type ProgressBarState = 'default' | 'success' | 'error';
export type ProgressBarCounterPlacement = 'bottom' | 'none' | 'right';

const displayIconMap = {
  default: undefined,
  success: <StdIcon name={StdIconId.Done} color="success-600" />,
  error: <StdIcon name={StdIconId.Close} color="error-600" />,
};

const StdProgressBar = ({
  label,
  percent,
  state = 'default',
  counterPlacement = 'bottom',
  errorMsg,
  id: propsId,
}: StdProgressBarProps) => {
  const {
    containerClasses,
    labelClasses,
    containerIconClasses,
    containerProgressBarClasses,
    progressBarClasses,
    errorLabelClasses,
    progressPercentageClasses,
  } = progressBarClassBuilder(state, counterPlacement);
  const id = useStdId('progressBar', propsId);

  const finalPercentage = Math.min(Math.max(percent, 0), 100);
  let icon;
  if (displayIconMap[state] != undefined) {
    icon = <div className={containerIconClasses}>{displayIconMap[state]}</div>;
  }

  return (
    <div role="figure" id={id} className={containerClasses}>
      <p className={labelClasses}>{label}</p>
      {icon}
      <div className={containerProgressBarClasses}>
        <div role="note" className={progressBarClasses} style={{ width: `${finalPercentage}%` }} />
      </div>
      <p role="content-info" className={errorLabelClasses}>
        {errorMsg}
      </p>
      <p role="caption" className={progressPercentageClasses}>
        {finalPercentage}%
      </p>
    </div>
  );
};

export default StdProgressBar;
