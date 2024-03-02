import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UnderConstruction from './UnderConstruction';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/UnderConstruction',
  component: UnderConstruction,
} as ComponentMeta<typeof UnderConstruction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UnderConstruction> = (args) => <UnderConstruction {...args} />;

export const NoSizeArg = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

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