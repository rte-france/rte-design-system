/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { valueOf } from '@/types/Generic.type.ts';
import { SpacerType } from './TreeType.ts';
import {
  TreeItemWithSiblings,
  TreeItemWithSiblingsDashed,
  TreeLastItem,
  TreeLastItemDashed,
  TreeLine,
  TreeNone,
} from '@/assets/index.ts';

type RdsTreeSpacerProps = {
  spacerType: valueOf<typeof SpacerType>;
  dashed?: boolean;
};

const IconMapper = {
  [SpacerType.ItemWithSiblings]: TreeItemWithSiblings,
  [SpacerType.Line]: TreeLine,
  [SpacerType.LastItem]: TreeLastItem,
  [SpacerType.None]: TreeNone,
};

const DashedIconMapper = {
  ...IconMapper,
  [SpacerType.ItemWithSiblings]: TreeItemWithSiblingsDashed,
  [SpacerType.LastItem]: TreeLastItemDashed,
};

export const RdsTreeSpacer = ({ spacerType, dashed = false }: RdsTreeSpacerProps) => {
  const Componant = dashed ? DashedIconMapper[spacerType] : IconMapper[spacerType];
  return <Componant />;
};
