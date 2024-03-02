import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Leviathan/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label:{
      description: 'Label that goes inside the element',
      defaultValue: 'Click me',
      control: { type: 'text' }
    },
    audioDescription:{
      description: 'Inclui uma descrição de áudio para usuários de leitores de tela',
      defaultValue: 'Click me',
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args}/>

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({})
