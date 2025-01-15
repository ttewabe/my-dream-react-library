import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RatingValue } from '../tat-react-project/rating/Rating';
import { RatingProps } from 'primereact/rating';

export default {
    title: 'FORM/Rating',
    component: RatingValue,
} as Meta<RatingProps>;

type Story = StoryObj<typeof RatingValue>;

export const Default: Story = {
    render: (args) => <RatingValue {...args} />,
};
