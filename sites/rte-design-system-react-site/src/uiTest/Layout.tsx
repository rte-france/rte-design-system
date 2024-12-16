/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { useState } from 'react';
import {
  RdsAlert,
  RdsBadge,
  RdsBanner,
  RdsBreadcrumb,
  RdsCard,
  RdsDivider,
  RdsDropdown,
  RdsHeading,
  RdsModal,
  RdsButton,
  RdsPopover,
  RdsTextTooltip,
  RdsToast,
  RdsTreeView,
} from 'rte-design-system-react';

export const largeTree = {
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
                { item: { label: 'test-2-2-2-1-1', id: 'testId-2-2-2-1-1' }, children: [], dashedSpacer: true },
                { item: { label: 'test-2-2-2-1-2', id: 'testId-2-2-2-1-2' }, children: [] },
              ],
              dashedSpacer: true,
            },
            {
              item: { label: 'test-2-2-2', id: 'testId-2-2-2' },
              children: [
                { item: { label: 'test-2-2-2-2-1', id: 'testId-2-2-2-2-1' }, children: [] },
                { item: { label: 'test-2-2-2-2-2', id: 'testId-2-2-2-2-2' }, children: [], dashedSpacer: true },
              ],
            },
          ],
        },
      ],
    },
    {
      item: { label: 'test-3', id: 'testId-3' },
      children: [{ item: { label: 'test-3-1', id: 'testId-3-1' }, children: [] }],
      dashedSpacer: true,
    },
  ],
};

export const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '10rem 1fr', rowGap: '1rem' }}>
      <span>RdsAlert</span>
      <RdsAlert message="Message" />
      <span>RdsBadge</span>
      <RdsBadge badgeValue={199}>Badge</RdsBadge>
      <span>RdsBanner</span>
      <RdsBanner message="RdsBanner" />
      <span>RdsBreadcrumb</span>
      <RdsBreadcrumb
        items={Array.from({ length: 3 }, (_, idx) => ({
          key: `item-${idx}`,
          label: `Item Label ${idx}`,
          target: '',
        }))}
      />
      <span>RdsCard</span>
      <RdsCard>Content</RdsCard>
      <span>RdsDivider</span>
      <RdsDivider />
      <span>RdsDropdown</span>
      <RdsDropdown
        items={[
          {
            key: 'item1',
            label: 'Item 1',
            value: 'item1',
            onItemClick: () => console.log('item1'),
          },
        ]}
      />
      <span>RdsHeading</span>
      <RdsHeading title="title" />
      <span>RdsModal</span>
      <RdsButton label="OpenModal" onClick={() => setShowModal((b) => !b)} />
      {showModal && (
        <RdsModal title="title" onClose={() => setShowModal(false)}>
          <RdsModal.Content>{'Content'}</RdsModal.Content>
        </RdsModal>
      )}
      <span>RdsPopover</span>
      <RdsPopover>
        <RdsPopover.Trigger>{'Trigger'}</RdsPopover.Trigger>
        <RdsPopover.Content>{'content'}</RdsPopover.Content>
      </RdsPopover>
      <span>RdsTextTooltip</span>
      <RdsTextTooltip text="test">content</RdsTextTooltip>
      <span>RdsToast</span>
      <RdsToast message="message" />
      <span>RdsTreeView</span>
      <RdsTreeView tree={largeTree} itemRender={({ label }) => <span>label {label}</span>} />
    </div>
  );
};

export default Layout;
