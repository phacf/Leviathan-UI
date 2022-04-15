import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StorybookSelect as Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Leviathan/Button',
  component: Button.Default,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      description: 'Label that goes inside the element',
      table: {
        type: {
          summary: 'sum',
          detail: 'det'
        }
      },
      defaultValue: 'Click me',
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Button.Default>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button.Default> = args => <Button.Default {...args}>{args.children}</Button.Default>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({})
Default.args ={

};

export const Outlined: ComponentStory<typeof Button.Outlined> = ((args) => <Button.Outlined {...args}>{args.children}</Button.Outlined>).bind({})
Outlined.args = {

};


