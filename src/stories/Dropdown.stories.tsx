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
        required: { control: 'boolean', defaultValue: false },
    },
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const dropdownOptions = [
    { id: '1', name: 'Option 1' },
    { id: '2', name: 'Option 2' },
    { id: '3', name: 'Option 3 (disabled)', disabled: true },
];

export const Default: Story = {
    render: (args) => <Dropdown {...args} />,
    args: {
        label: 'Dropdown Label',
        options: dropdownOptions,
        Placeholder: 'Select an option',
        style: { width: '300px' },
    },
};
