import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Center from './Center';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Center',
  component: Center,
} as ComponentMeta<typeof Center>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Center> = (args) => <Center {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: 'Hello world!',
};

