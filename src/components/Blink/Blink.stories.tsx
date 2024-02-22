import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Blink from './Blink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Blink',
  component: Blink,
} as ComponentMeta<typeof Blink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Blink> = (args) => <Blink {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: 'Hello world!',
};

