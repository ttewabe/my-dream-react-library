import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import MultiSelect from './MultiSelect';


export default {
  title: 'Components/MultiSelect', 
  component: MultiSelect,
} as Meta<typeof MultiSelect>;

// Template for creating stories
const Template: StoryFn = () => <MultiSelect />;

export const Default = Template.bind({});
Default.args = {};
