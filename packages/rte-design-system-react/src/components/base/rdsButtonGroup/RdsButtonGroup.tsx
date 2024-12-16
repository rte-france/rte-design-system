/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconIdKey } from '@/utils/index.ts';
import { RdsButton } from '../rdsButton/RdsButton.tsx';

export type ButtonGroupVariant = 'contained' | 'outlined';
export type ButtonGroupSize = 'medium' | 'small';

export interface LimitedRdsButtonProps {
  label: string;
  disabled?: boolean;
  startIcon?: RdsIconIdKey;
}

export const RdsButtonGroup = (props: LimitedRdsButtonProps) => (
  <RdsButton label={props.label} disabled={props.disabled} variant="contained" size="medium" />
);
