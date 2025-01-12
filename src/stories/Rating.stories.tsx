import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Rating } from '../tat-react-project/rating/Rating';
import { RatingProps } from 'primereact/rating';

export default {
    title: 'FORM/Rating',
    component: Rating,
    argTypes: {
        value: { control: 'number' },
        readOnly: { control: 'boolean' },
        cancel: { control: 'boolean' },
        disabled: { control: 'boolean' },
        stars: { control: 'number' },
    },
} as Meta<RatingProps>;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
    render: (args) => <Rating {...args} />,
    args: {
        value: 3,
        stars: 5,
        readOnly: false,
        cancel: true,
    },
};

// export const ReadOnly = Template.bind({});
// ReadOnly.args = {
//     value: 4,
//     stars: 5,
//     readOnly: true,
// };
