/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { TreeItem } from '../TreeType';

export type RenderItem = {
  label: string;
  id: string;
};

export const oneItemTree: TreeItem<RenderItem> = {
  item: { label: 'test', id: 'testId' },
};
export const smallTree: TreeItem<RenderItem> = {
  item: { label: 'test', id: 'testId' },
  children: [{ item: { label: 'test-1-1', id: 'testId-1-1' }, children: [] }],
};

export const largeTree: TreeItem<RenderItem> = {
  item: { label: 'test', id: 'testId' },
  children: [
    {
      item: { label: 'test-1', id: 'testId-1' },
      children: [{ item: { label: 'test-1-1', id: 'testId-1-1' }, children: [] }],
    },
    {
      item: { label: 'test-2', id: 'testId-2' },
      children: [
        { item: { label: 'test-2-1', id: 'testId-2-1' }, children: [] },
        {
          item: { label: 'test-2-2', id: 'testId-2-2' },
          children: [
            {
              item: { label: 'test-2-2-1', id: 'testId-2-2-1' },
              children: [
                { item: { label: 'test-2-2-2-1-1', id: 'testId-2-2-2-1-1' }, children: [] },
                { item: { label: 'test-2-2-2-1-2', id: 'testId-2-2-2-1-2' }, children: [] },
              ],
            },
            {
              item: { label: 'test-2-2-2', id: 'testId-2-2-2' },
              children: [
                { item: { label: 'test-2-2-2-2-1', id: 'testId-2-2-2-2-1' }, children: [] },
                { item: { label: 'test-2-2-2-2-2', id: 'testId-2-2-2-2-2' }, children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      item: { label: 'test-3', id: 'testId-3' },
      children: [{ item: { label: 'test-3-1', id: 'testId-3-1' }, children: [] }],
    },
  ],
};
