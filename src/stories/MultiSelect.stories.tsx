import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {MultiSelect} from '../components/MultiSelect';


export default {
  title: 'INPUTS/MultiSelect', 
  component: MultiSelect,
} as Meta<typeof MultiSelect>;

// Template for creating stories
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
    render: () => <MultiSelect />,
};
Default.args = {};

