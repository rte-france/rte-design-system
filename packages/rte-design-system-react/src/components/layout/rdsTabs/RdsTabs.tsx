/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useEffect, useMemo, useState } from 'react';
import { RdsTabItemProps } from './RdsTabItem.tsx';
import { useRdsId } from '@/hooks/index.ts';
import { RdsTabList } from './RdsTabList.tsx';

export type RdsTabItemPrimary = Omit<RdsTabItemProps, 'onClick' | 'tabType'>;
export type RdsTabItemSecondary = Omit<RdsTabItemProps, 'tabType'>;

type RdsTabProps<TPrimary extends RdsTabItemPrimary, TSecondary extends RdsTabItemSecondary> = {
  id?: string;
  items: TPrimary[];
  renderPrimary: (item: TPrimary) => React.ReactElement;
  renderSecondary?: (item: TSecondary) => React.ReactElement;
};

export const RdsTabs = <TPrimary extends RdsTabItemPrimary, TSecondary extends RdsTabItemSecondary>({
  items,
  id: propsId,
  renderPrimary,
  renderSecondary,
}: RdsTabProps<TPrimary, TSecondary>) => {
  const [primaryCurrentTab, setPrimaryCurrentTab] = useState(items.find((item) => item.active)?.id || items[0]?.id);
  const id = useRdsId('tbs', propsId);

  useEffect(() => {
    const firstActive = items.find((item) => item.active);
    setPrimaryCurrentTab(firstActive?.id || items[0]?.id);
  }, [items]);

  const secondaryTabs = useMemo(() => {
    const selectPrimary = items.find((item) => item.id === primaryCurrentTab);
    return selectPrimary?.secondary ?? [];
  }, [items, primaryCurrentTab]) as TSecondary[];
  return (
    <div className="flex flex-col gap-1" role="group" id={id}>
      <RdsTabList tabType="primary" items={items} renderItem={renderPrimary} />
      {secondaryTabs.length > 0 && renderSecondary && (
        <RdsTabList tabType="secondary" items={secondaryTabs} renderItem={renderSecondary} />
      )}
    </div>
  );
};

export default RdsTabs;
