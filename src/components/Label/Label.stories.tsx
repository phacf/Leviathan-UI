import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Label from './Label'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Leviathan/Label',
  component: Label,
  
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  
  argTypes: {

    children: {
      defaultValue: 'label',
      control: {type: 'text'}
    },
    size: {
      control: 'radio',
      options: ['default' , 'small', 'medium', 'large', 'xl', 'xxl']    
    },
    type: {
      control: 'radio',
      options: ['warning', 'error', 'success', 'default']         
  }
  }
} as ComponentMeta<typeof Label>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = args => (
  <Label {...args}>{args.children}</Label>
)

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({})
