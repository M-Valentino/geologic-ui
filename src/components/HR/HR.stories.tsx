import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HR from './HR';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/HR',
  component: HR,
} as ComponentMeta<typeof HR>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HR> = (args) => <HR {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: "sm"
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md"
};

export const Large = Template.bind({});
Large.args = {
  size: "lg"
};

export const XtraLarge = Template.bind({});
XtraLarge.args = {
  size: "xl"
};

export const Orange = Template.bind({});
Orange.args = {
  color: "#fa0",
  size: "lg"
};