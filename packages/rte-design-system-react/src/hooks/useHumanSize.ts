/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { getHumanSize } from '@/shared/utils/getHumanSize';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const useHumanSize = () => {
  const { t: tDynamic } = useTranslation();

  const formatHumanSize = useCallback(
    (size: number) => {
      const { value, unit } = getHumanSize(size);
      return `${value} ${tDynamic(`components.infoUnit.@${unit}`)}`;
    },
    [tDynamic],
  );

  return {
    formatHumanSize,
  };
};
