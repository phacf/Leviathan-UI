import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import {ButomProps} from '../types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mylib/Button',
  component: Button
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes  
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClickMe = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClickMe.args = {
  label: 'Click me!',
};


