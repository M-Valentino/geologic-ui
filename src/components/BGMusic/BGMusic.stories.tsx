import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BGMusic from './BGMusic';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BGMusic',
  component: BGMusic,
} as ComponentMeta<typeof BGMusic>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BGMusic> = (args) => <BGMusic {...args} />;

export const Music = Template.bind({});
Music.args = {
  videoID: 'z_yk_IGNd7c',
};

