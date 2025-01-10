import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {SlideDrawer} from '../tat-react-project/slide-drawer/SlideDrawer';

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


const Template: StoryFn<typeof SlideDrawer> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <button  style={{ padding: '10px', background:"gray", color:"white",border: 'none', cursor: 'pointer', fontSize:"20px", fontWeight:"bold" }}
       onClick={() => setIsOpen(!isOpen)} >Toggle Drawer</button>
      <SlideDrawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{padding: '6px', background:"lightGray", width:"auto", height:"auto",fontSize:"20px", fontWeight:"bold" }}>
        <span
            style={{position: 'absolute',top: '5px', right: '15px',color: 'brown',border: 'none', cursor: 'pointer'}}
            onClick={() => setIsOpen(false)}>X</span>
          <h1>SlideDrawer</h1>
          <p>The content inside the drawer.</p>
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
