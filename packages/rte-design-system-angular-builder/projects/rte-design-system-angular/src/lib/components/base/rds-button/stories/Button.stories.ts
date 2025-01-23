/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Meta, StoryObj } from "@storybook/angular";
import { RdsButtonComponent } from "../rds-button.component";

const meta: Meta<RdsButtonComponent> = {
    title: 'Components/Base/Button',
    component: RdsButtonComponent,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            options: ['contained', 'outlined', 'dashed', 'text', 'transparent'],
            control: { type: 'radio' },
        },
        color: {
            options: ['primary', 'secondary', 'danger'],
            control: { type: 'radio' },
        },
        size: {
            options: ['extraSmall', 'small', 'medium'],
            control: { type: 'radio' },
        },
        type: {
            options: ['button', 'submit', 'reset'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<RdsButtonComponent>;

export default meta;
type Story = StoryObj<RdsButtonComponent>;

export const Default: Story = {
    name: 'Default',
    args: {
        label: 'Button',
        variant: 'contained',
        color: 'primary',
        size: 'medium',
        type: 'button',
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

  export const Transparent: Story = {
    args: {
      label: 'Button',
      variant: 'transparent',
    },
  };

  export const Dashed: Story = {
    args: {
      label: 'Button',
      variant: 'dashed',
    },
  };

  export const Primary: Story = {
    args: {
      label: 'Button',
      color: 'primary',
    },
  };
