import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import MultiSelect from './MultiSelect';

// Default export to define the metadata of the story
export default {
  title: 'Components/MultiSelect', // Organizes the story in the Storybook sidebar
  component: MultiSelect,
} as Meta<typeof MultiSelect>;

// Template for creating stories
const Template: StoryFn = () => <MultiSelect />;

// Default story
export const Default = Template.bind({});
Default.args = {};
