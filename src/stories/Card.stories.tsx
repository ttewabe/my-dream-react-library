import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card} from '../components/Card';

export default {
    title: 'LAYOUT/Card',
    component: Card,
} as Meta<typeof Card>;

// Template for creating stories
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => <Card {...args} />,
  args: {
    header: "Card Header",
  headerLabel: "L",
  children: <p>This is the content of the card.</p>,
  },
};

export const WithLongContent: Story = {
  render:(args)=>  <Card {...args} />,
  args: {
  header: "Card Header",
  headerLabel: "L",
  children: (
    <div>
      <p>This is some longer content inside the card.</p>
      <p>You can use this to test how the card handles larger amounts of content.</p>
    </div>
  ),
}
};

export const WithoutChildren : Story = {
    render:(args)=>  <Card {...args} />,
    args: {
  header: "Card Header",
  headerLabel: "Label",
  children: undefined,
}
};
