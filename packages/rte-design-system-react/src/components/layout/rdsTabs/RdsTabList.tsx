/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { UIEventHandler, useEffect, useRef, useState } from 'react';
import { TabItemType } from './RdsTabItem.tsx';
import { tabListClassBuilder } from './tabClassBuilder.tsx';
import { useRdsId } from '@/hooks/index.ts';
import { RdsButton } from '@/components/base/index.ts';
import { RdsIconId } from '@/utils/index.ts';

type RdsTabListProps<TItem> = {
  tabType: TabItemType;
  items: TItem[];
  renderItem: (item: TItem) => React.ReactElement;
  lastItem?: () => React.ReactElement;
  id?: string;
};

type ScreenSize = {
  width: number;
  height: number;
};

const SCROLL_GAP = 100;

export const RdsTabList = <TItem,>({
  tabType = 'primary',
  items,
  renderItem,
  lastItem,
  id: propsId,
}: RdsTabListProps<TItem>) => {
  const divListRef = useRef<HTMLDivElement>(null);
  const [, setScreenSize] = useState<ScreenSize | null>(null);
  const [scrollValue, setScrollValue] = useState<number>(0);

  const id = useRdsId('tbl', propsId);

  const { buttonClasses } = tabListClassBuilder(
    tabType,
    scrollValue,
    divListRef.current?.clientWidth,
    divListRef.current?.scrollWidth,
  );

  const onArrowLeftClick = () => {
    const nextScrollValue = scrollValue - SCROLL_GAP;
    if (scrollValue > 0) {
      divListRef?.current?.scroll({ left: nextScrollValue, behavior: 'smooth' });
    }
  };

  const onArrowRightClick = () => {
    let nextScrollValue = scrollValue + SCROLL_GAP;
    if (divListRef.current && scrollValue < divListRef.current.scrollWidth - divListRef.current.clientWidth) {
      const gapWidth = divListRef.current.scrollWidth - divListRef.current.clientWidth;
      nextScrollValue = Math.min(nextScrollValue, gapWidth);
      divListRef?.current?.scroll({
        left: nextScrollValue,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    setScrollValue((e.target as HTMLDivElement).scrollLeft);
  };

  const handleResize = () => {
    setScreenSize({
      width: window.screen.width,
      height: window.screen.height,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isPrimaryDisplay = tabType === 'primary';

  return (
    <div role="tablist" id={id} className="relative">
      <div className="flex">
        <div className={buttonClasses.left}>
          <RdsButton
            icon={RdsIconId.KeyboardArrowLeft}
            color="secondary"
            size="small"
            variant={isPrimaryDisplay ? 'contained' : 'text'}
            onClick={onArrowLeftClick}
          />
        </div>
        <div className="no-wrap flex overflow-x-hidden" ref={divListRef} onScroll={handleScroll}>
          {items.map((item) => renderItem(item))}
          {lastItem && lastItem()}
        </div>
        <div className={buttonClasses.right}>
          <RdsButton
            icon={RdsIconId.KeyboardArrowRight}
            color="secondary"
            size="small"
            variant={isPrimaryDisplay ? 'contained' : 'text'}
            onClick={onArrowRightClick}
          />
        </div>
        {isPrimaryDisplay && <div className="grow border-b-2 border-gray-300" />}
      </div>
    </div>
  );
};
