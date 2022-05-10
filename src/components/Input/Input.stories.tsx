import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './Input'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Leviathan/Input-Text',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      defaultValue: 'INPUT LABEL',
    },
    correct: {
      control: 'radio',
      options: [undefined, true, false]
    },
    hint:{
      defaultValue: 'Error!'
    },
    size: {
      control: 'radio',
      options: ['default' , 'small', 'medium', 'large', 'xl', 'xxl']    
    },
  }
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = args => <Input {...args}>{args.label}</Input>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({})




