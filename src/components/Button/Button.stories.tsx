import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world! - no size arg',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small',
  size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium',
  size: "medium"
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large',
  size: "large"
};

export const LightBlue = Template.bind({});
LightBlue.args = {
  label: 'Light Blue color',
  color: "#aaf"
};