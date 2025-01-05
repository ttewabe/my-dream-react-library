import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {SlideDrawer} from '../components/SlideDrawer';

export default {
  title: 'LAYOUT/SlideDrawer',
  component: SlideDrawer,
  argTypes: {
    isOpen: { control: 'boolean', defaultValue: true },
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      defaultValue: 'left',
    },
  },
} as Meta<typeof SlideDrawer>;

// Correctly typed Template function
const Template: StoryFn<typeof SlideDrawer> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Drawer</button>
      <SlideDrawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ padding: '16px' }}>
          <h3>SlideDrawer Content</h3>
          <p>This is the content inside the drawer.</p>
        </div>
      </SlideDrawer>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  position: 'left',
};
