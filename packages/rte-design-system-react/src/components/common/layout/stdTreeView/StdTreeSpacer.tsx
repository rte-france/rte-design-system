/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { valueOf } from '@/shared/types';
import { SpacerType } from './TreeType';

type StdTreeSpacerProps = {
  spacerType: valueOf<typeof SpacerType>;
  dashed?: boolean;
};

const iconMapper: Record<valueOf<typeof SpacerType>, string> = {
  [SpacerType.ItemWithSiblings]: '/assets/treeItemWithSiblings.svg',
  [SpacerType.Line]: '/assets/treeLine.svg',
  [SpacerType.LastItem]: '/assets/treeLastItem.svg',
  [SpacerType.None]: '/assets/treeNone.svg',
};

const dashedIconMapper: Record<valueOf<typeof SpacerType>, string> = {
  ...iconMapper,
  [SpacerType.ItemWithSiblings]: '/assets/treeItemWithSiblingsDashed.svg',
  [SpacerType.LastItem]: '/assets/treeLastItemDashed.svg',
};

const StdTreeSpacer = ({ spacerType, dashed = false }: StdTreeSpacerProps) => (
  <img src={dashed ? dashedIconMapper[spacerType] : iconMapper[spacerType]} alt={spacerType} />
);

export default StdTreeSpacer;
