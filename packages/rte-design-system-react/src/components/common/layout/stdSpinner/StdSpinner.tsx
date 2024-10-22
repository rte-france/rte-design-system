/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import { spinnerClassBuilder } from './spinnerClassBuilder';

type StdSpinnerProps = {
  size: 'small' | 'medium' | 'large';
  ariaValueText?: string;
  id?: string;
};

const StdSpinner = ({ size, ariaValueText = 'loading', id: propsId }: StdSpinnerProps) => {
  const id = useStdId('spinner', propsId);
  const spinnerClasses = spinnerClassBuilder(size);
  return <div className={spinnerClasses} aria-valuetext={ariaValueText} id={id}></div>;
};

export default StdSpinner;
