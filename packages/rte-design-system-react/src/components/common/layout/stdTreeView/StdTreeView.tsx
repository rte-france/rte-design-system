/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useStdId } from '@/hooks/useStdId';
import StdTreeItem from './StdTreeItem';
import { TreeViewProps } from './TreeType';

type StdTreeViewProps<T extends { id: string }> = TreeViewProps<T> & { id?: string };

const StdTreeView = <T extends { id: string }>(props: StdTreeViewProps<T>) => {
  const { id: propsId } = props;
  const id = useStdId('treeView', propsId);

  return (
    <div id={id} className="flex flex-col items-start">
      <StdTreeItem {...props} defaultOpen={true} />
    </div>
  );
};

export default StdTreeView;
