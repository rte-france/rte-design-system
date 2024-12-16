/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { dividerClassBuilder } from './dividerClassBuilder.ts';

export type RdsDividerProps = {
  extraClasses?: string;
};

export const RdsDivider = ({ extraClasses }: RdsDividerProps) => {
  const dividerClasses = dividerClassBuilder(extraClasses);
  return <hr className={dividerClasses} role="separator" />;
};
