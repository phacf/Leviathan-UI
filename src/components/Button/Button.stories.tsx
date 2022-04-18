import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Leviathan/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      description: 'Label that goes inside the element',
      defaultValue: 'Click me',
      control: { type: 'text' }
    },
    disabled:{control: 'boolean'},
    outline: {control: 'none'},
    size: {
      control: 'radio',
      options: ['default' , 'small', 'medium', 'large', 'xl', 'xxl']    
    },
    type: {control: 'none'}
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args}>{args.children}</Button>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({})




