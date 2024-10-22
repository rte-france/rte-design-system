/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { valueOf } from '@/shared/types';
import { isLastIndex } from '@/shared/utils/array/arrayUtils';
import { useCallback, useMemo, useState } from 'react';
import StdTreeCollaplseIcon from './StdTreeCollaplseIcon';
import StdTreeSpacer from './StdTreeSpacer';
import { handleTreeKeyboardNavigation, updateSpacerWithIndex } from './StdTreeTools';
import { SpacerType, TreeCollapseIcon, TreeItem, TreeViewProps } from './TreeType';
import { treeItemContainerClassBuilder } from './treeViewClassBuilder';

type StdTreeItemProps<T extends { id: string }> = TreeViewProps<T> & {
  depthSpacer?: valueOf<typeof SpacerType>[];
};

const StdTreeItem = <T extends { id: string }>(props: StdTreeItemProps<T>) => {
  const {
    itemRender,
    tree,
    depthSpacer = [],
    selectedItems,
    defaultOpen = false,
    unfoldOnClick = false,
    onItemClick: onItemSelect,
  } = props;
  const [collapse, setCollapse] = useState<boolean>(!defaultOpen);
  const className = treeItemContainerClassBuilder(selectedItems?.includes(tree.item.id));

  const toggleCollapse = useCallback(() => setCollapse((old) => !old), []);

  const collapseComponent = useMemo(() => {
    if (!tree.children?.length) {
      return;
    }
    return (
      <StdTreeCollaplseIcon
        iconType={collapse ? TreeCollapseIcon.Collapse : TreeCollapseIcon.Expand}
        onClick={toggleCollapse}
      />
    );
  }, [collapse, toggleCollapse, tree.children]);

  const handleClick = () => {
    if (onItemSelect) onItemSelect(tree.item.id);
    if (unfoldOnClick) setCollapse(false);
  };

  return (
    <>
      <div
        className={className.container}
        tabIndex={0}
        onKeyUp={handleTreeKeyboardNavigation(toggleCollapse)}
        onClick={handleClick}
      >
        {depthSpacer.map((spacer, index) => (
          <StdTreeSpacer
            key={index}
            dashed={tree.dashedSpacer}
            spacerType={updateSpacerWithIndex(spacer, isLastIndex(index, depthSpacer))}
          />
        ))}
        {collapseComponent}
        {itemRender(tree.item)}
      </div>
      {!collapse &&
        tree.children?.map((child, index) => {
          const nextSpacer = isLastIndex(index, tree.children as TreeItem<T>[])
            ? SpacerType.LastItem
            : SpacerType.ItemWithSiblings;
          return (
            <StdTreeItem
              key={child.item.id}
              {...props}
              defaultOpen={false}
              tree={child}
              depthSpacer={[...depthSpacer, nextSpacer]}
            />
          );
        })}
    </>
  );
};

export default StdTreeItem;
