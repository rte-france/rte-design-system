/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIcon } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';
import { useTranslation } from 'react-i18next';

const ICON_SIZE = 16;
export const EMPTY_SEARCH_ID = 'empty-search';
export const RdsEmptySearch = () => {
  const { t } = useTranslation();
  return (
    <div id={EMPTY_SEARCH_ID} className="flex w-full gap-1 px-1">
      <RdsIcon color="gray-600" name={RdsIconId.Search} height={ICON_SIZE} width={ICON_SIZE} />
      <p className="text-pretty text-caption text-gray-700">{t('components.search.@empty')}</p>
    </div>
  );
};
