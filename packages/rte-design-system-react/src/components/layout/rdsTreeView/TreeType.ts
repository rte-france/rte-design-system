/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const SpacerType = {
  Line: '│',
  ItemWithSiblings: '├',
  LastItem: '└',
  None: ' ',
} as const;

export const TreeCollapseIcon = {
  Collapse: '>',
  Expand: 'V',
} as const;

export type TreeItem<T extends { id: string }> = {
  item: T;
  children?: TreeItem<T>[];
  dashedSpacer?: boolean;
};

export type TreeViewProps<T extends { id: string }> = {
  tree: TreeItem<T>;
  itemRender: (item: T) => React.ReactElement;
  selectedItems?: string[];
  defaultOpen?: boolean;
  onItemClick?: (id: string) => void;
  unfoldOnClick?: boolean;
};
