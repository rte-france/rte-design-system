/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { RdsIconId } from '@/utils/index.ts';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tagListClassBuilder } from './tagListClassBuilder.ts';
import { RdsIcon } from '../rdsIcon/RdsIcon.tsx';
import { RdsTag } from '../rdsTag/RdsTag.tsx';
import { RdsButton } from '../rdsButton/RdsButton.tsx';
import { useCallOnResize } from '@/hooks/components/useCallOnResize.ts';
import { countMaxItemsToFitInContainer } from '@/utils/common/dom/displayUtils.ts';
import { RdsTextTooltip } from '@/components/layout/rdsTextTooltip/RdsTextTooltip.tsx';
import { RdsPopover } from '@/components/layout/rdsPopover/RdsPopover.tsx';
import { useRdsId } from '@/hooks/index.ts';

type RdsTagListProps = {
  tags: string[];
  icon?: keyof typeof RdsIconId;
  tooltipText?: string;
  onDelete?: (tag: string) => void;
  id?: string;
  autoExpends?: boolean;
};

const ICON_SIZE = 16;
const POPOVER_OFFSET = 10;

export const RdsTagList = ({
  tags,
  icon,
  tooltipText,
  id: propsId,
  onDelete,
  autoExpends = false,
}: RdsTagListProps) => {
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [tagsNumber, setTagsNumber] = useState<number>(tags.length);
  const { tagListClasses } = tagListClassBuilder(isReady);
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const id = useRdsId('tag-list', propsId);

  useCallOnResize(() => setTagsNumber(countMaxItemsToFitInContainer(containerRef, tagsRef, autoExpends)), id);

  useEffect(() => {
    setTagsNumber(countMaxItemsToFitInContainer(containerRef, tagsRef, autoExpends));
    setIsReady(true);
  }, [tags, autoExpends]);

  return (
    <div id={id} className="rds-flex rds-h-full rds-w-full rds-gap-1">
      {icon && (
        <RdsTextTooltip text={tooltipText ?? t('components.tags.@tags')}>
          <RdsIcon name={icon} width={ICON_SIZE} height={ICON_SIZE} color="gray-700" />
        </RdsTextTooltip>
      )}
      <div className={tagListClasses} ref={containerRef} role="list">
        {tags.map((tag, idx) => (
          <span
            role="listitem"
            ref={(r) => (tagsRef.current[idx] = r)}
            className={idx >= tagsNumber ? 'rds-hidden' : ''}
            key={tag.toLowerCase()}
          >
            <RdsTag label={tags.at(idx) || ''} onDelete={onDelete ? () => onDelete(tag) : undefined} />
          </span>
        ))}
        <span className="rds-flex">
          {(!isReady || tags.length - tagsNumber > 0) && (
            <RdsPopover
              offset={POPOVER_OFFSET}
              show={showPopover}
              setShow={setShowPopover}
              placement="bottom"
              id={`${id}-popover`}
            >
              <RdsPopover.Trigger>
                <RdsButton
                  color="secondary"
                  variant="outlined"
                  size="extraSmall"
                  label={`+ ${isReady ? tags.length - tagsNumber : '00000'}`}
                  id={`${id}-popover-trigger`}
                />
              </RdsPopover.Trigger>
              <RdsPopover.Content>
                <div className="rds-flex rds-max-w-32 rds-flex-wrap rds-gap-x-0.5 rds-gap-y-1">
                  {tags.map((tag) => (
                    <RdsTag label={tag} onDelete={onDelete ? () => onDelete(tag) : undefined} key={tag.toLowerCase()} />
                  ))}
                </div>
              </RdsPopover.Content>
              <RdsPopover.Footer>
                <RdsButton
                  label={t('components.popover.@close')}
                  size="extraSmall"
                  onClick={() => setShowPopover(false)}
                  id={`${id}-popover-close`}
                />
              </RdsPopover.Footer>
            </RdsPopover>
          )}
        </span>
      </div>
    </div>
  );
};
