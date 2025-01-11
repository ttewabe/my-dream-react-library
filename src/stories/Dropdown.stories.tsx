import React from 'react';
import { Dropdown } from '../tat-react-project/dropdown/Dropdown';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'OVERLAYS/Dropdown',
    component: Dropdown,
    argTypes: {
        label: { control: 'text', defaultValue: 'Dropdown Label' },
        placeholder: { control: 'text', defaultValue: 'Select an option' },
        disabled: { control: 'boolean', defaultValue: false },
    },
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const dropdownOptions = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3 (disabled)', disabled: true },
    { id: '4', name: 'Option 4' },
    { id: '5', name: 'Option 5' },
];

export const Default: Story = {
    render: (args) => <Dropdown {...args} />,
    args: {
        id: 'dropdown',
        label: 'Dropdown Label',
        options: dropdownOptions,
        value: '',
        placeholder: 'Select an option',
        style: { width: '200px' },
        onChange: (value) => console.log('Selected:', value),
    },
};
