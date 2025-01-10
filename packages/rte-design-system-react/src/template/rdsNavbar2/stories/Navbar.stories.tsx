/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { RdsNavbar } from '../RdsNavbar.tsx';
import RdsNavbarItemList, { NavbarItemContent } from '../RdsNavbarItemList.tsx';
import { RdsIconId } from '@/utils/index.ts';
import { Groups, Home } from '@/assets/index.ts';
import RdsNavbarFooter from '../RdsNavbarFooter.tsx';

const fakeItems: NavbarItemContent[] = [
  {
    icon: RdsIconId.Home,
    name: 'Home',
    location: 'Location',
  },
  {
    icon: RdsIconId.Download,
    name: 'Download',
    location: 'Download',
  },
];

const meta = {
  title: 'Template/Navbar',

  component: RdsNavbar,
  parameters: {
    layout: 'centered',
  },
  decorators: (ComponentStory) => {
    return (
      <div className="rds-h-full rds-w-full">
        <ComponentStory />
      </div>
    );
  },
  argTypes: {},
} satisfies Meta<typeof RdsNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Default2',
  args: {
    header: (
      <div className="rds-flex rds-justify-center">
        <Home stroke="gray-900" />
      </div>
    ),
    item: (
      <RdsNavbarItemList
        items={fakeItems}
        navigate={(location) => {
          console.log(location);
        }}
      />
    ),
    footer: <RdsNavbarFooter />,
  },
};
