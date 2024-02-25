import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const BeerNoSizeArg = Template.bind({});
BeerNoSizeArg.args = {
  name: "beer",
};

export const AlienSM = Template.bind({});
AlienSM.args = {
  name: "alien",
  size: "sm"
};

export const TelephoneMD = Template.bind({});
TelephoneMD.args = {
  name: "telephone",
  size: "md"
};

export const FolderLG = Template.bind({});
FolderLG.args = {
  name: "folder",
  size: "lg"
};

export const HeartXL = Template.bind({});
HeartXL.args = {
  name: "heart",
  size: "xl"
};