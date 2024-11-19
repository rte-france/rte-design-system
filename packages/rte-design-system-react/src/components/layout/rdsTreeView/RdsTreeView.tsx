/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useRdsId } from '@/hooks/index.ts';
import { TreeViewProps } from './TreeType.ts';
import { RdsTreeItem } from './RdsTreeItem.tsx';

type RdsTreeViewProps<T extends { id: string }> = TreeViewProps<T> & { id?: string };

export const RdsTreeView = <T extends { id: string }>(props: RdsTreeViewProps<T>) => {
  const { id: propsId } = props;
  const id = useRdsId('treeView', propsId);

  return (
    <div id={id} className="flex flex-col items-start">
      <RdsTreeItem {...props} defaultOpen={true} />
    </div>
  );
};

export default RdsTreeView;
