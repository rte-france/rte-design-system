/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Getter, Row } from '@tanstack/react-table';
import { RdsButtonCollapseIcon } from '../lineRender/RdsButtonCollapseIcon.tsx';

type ExpandableCellProps<TData> = { row: Row<TData>; getValue: Getter<React.ReactNode> };

export const RdsExpandableCell = <TData,>({ row, getValue }: ExpandableCellProps<TData>) => (
  <>
    <div
      style={{
        paddingLeft: `${row.depth * 2}rem`,
      }}
      data-testid="spacer"
    />
    {row.getCanExpand() && (
      <RdsButtonCollapseIcon isOpen={row.getIsExpanded()} onClick={row.getToggleExpandedHandler()} />
    )}
    {getValue()}
  </>
);
