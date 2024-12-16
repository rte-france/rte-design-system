/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { RdsButton } from '../RdsButton.tsx';
import { RdsIconId } from '@/utils/index.ts';

const meta = {
  title: 'Components/Base/Button',

  component: RdsButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'dashed', 'text', 'transparent'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof RdsButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Default2',
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'secondary',
  },
};

export const Contained: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
  },
};
export const Outlined: Story = {
  args: {
    label: 'Button',
    variant: 'outlined',
  },
};
export const Text: Story = {
  args: {
    label: 'Button',
    variant: 'text',
  },
};
export const ContainedWithIcon: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    icon: RdsIconId.Add,
  },
};

export const SingleIcon: Story = {
  args: {
    icon: RdsIconId.Add,
    variant: 'contained',
  },
};
