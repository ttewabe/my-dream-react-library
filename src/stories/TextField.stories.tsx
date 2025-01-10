import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextField} from '../tat-react-project/text-field/TextField';

export default {
  title: 'INPUTS/TextField',
  component: TextField,
  argTypes: {
    label: { control: 'text', defaultValue: 'TextField Label' },
    placeholder: { control: 'text', defaultValue: 'Enter text here' },
    required: { control: 'boolean', defaultValue: false },
  },
} as Meta<typeof TextField>;

// Template for creating stories
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    label: 'TextField Label',
    placeholder: 'Enter text here',
    required: false,
  },
};

export const Required: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    label: 'Required TextField',
    placeholder: 'Please enter a value',
    required: true,
  },
};