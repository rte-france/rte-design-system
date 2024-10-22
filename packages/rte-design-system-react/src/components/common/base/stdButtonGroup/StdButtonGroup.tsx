/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { StdIconId } from '@/shared/utils/mappings/common/iconMaps';
import StdButton from '@common/base/stdButton/StdButton';

export type ButtonGroupVariant = 'contained' | 'outlined';
export type ButtonGroupSize = 'medium' | 'small';

export interface LimitedStdButtonProps {
  label: string;
  disabled?: boolean;
  startIcon?: StdIconId;
}

const StdButtonGroup = (props: LimitedStdButtonProps) => (
  <StdButton label={props.label} disabled={props.disabled} variant="contained" size="medium" />
);

export default StdButtonGroup;
