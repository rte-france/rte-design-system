/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import StdSliderDouble, { StdDualSliderProps } from './stdDualSlider/StdDualSlider';
import StdSliderSimple, { StdSimpleSliderProps } from './stdSimpleSlider/StdSimpleSlider';

export type ThumbStyle = 'round' | 'bar';

export type StdSliderBaseProps = {
  name: string;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  readOnly?: boolean;
  helperText?: string;
  error?: boolean;
  id?: string;
};

export type StdSliderInputProps = StdSimpleSliderProps | StdDualSliderProps;

const StdInputSlider = (props: StdSliderInputProps) => {
  const { sliderType } = props;
  return sliderType === 'simple' ? <StdSliderSimple {...props} /> : <StdSliderDouble {...props} />;
};

export default StdInputSlider;
