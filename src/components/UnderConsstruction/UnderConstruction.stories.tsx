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

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  children: 'Hello world!',
};

