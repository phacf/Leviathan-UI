import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Leviathan/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes 
  argTypes: {
    label:{
      description: 'Label goes inside body of the button',
      control: {
        type: null
      }
    }
  } 
 

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Click me!',
  mode: 'default'
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning',
  mode: 'warning'
};

export const Success = Template.bind({});
Success.args = {
  label: 'Success',
  mode: 'success'
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  mode: 'error'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  mode: 'disabled'
};
