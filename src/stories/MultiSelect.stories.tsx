import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from '../components/MultiSelect';

export default {
  title: 'INPUTS/MultiSelect',
  component: MultiSelect,
  argTypes: {
    label: { control: 'text', defaultValue: 'MultiSelect Label' },
    placeholder: { control: 'text', defaultValue: 'Select an option' },
  },
} as Meta<typeof MultiSelect>;

// Template for creating stories
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  render: (args) => <MultiSelect {...args} />,
  args: {
    label: 'MultiSelect Label',
    placeholder: 'Select an option',
  },
};

export const Required: Story = {
  render: (args) => <MultiSelect {...args} />,
  args: {
    label: 'Required MultiSelect',
    placeholder: 'Please make a selection',
  },
};