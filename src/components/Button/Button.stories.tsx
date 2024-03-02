import { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Leviathan/Button',
  tags: ['autodocs'],
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      description: 'Label that goes inside the element',
      defaultValue: 'Click me',
      control: { type: 'text' }
    },
    audioDescription: {
      description: 'Inclui uma descrição de áudio para usuários de leitores de tela',
      defaultValue: 'Click me',
      control: { type: 'text' }
    },
    size: {
      control: 'radio',
      description: 'Label that goes inside the element',
      options: ['large', 'medium', 'small'],
      defaultValue: 'medium'
    },
  }
} satisfies Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Story = StoryObj<typeof Button>;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: 'click-me',
    size: 'medium',
    color: 'primary',
    audioDescription: 'Incluir descrição de audio',
  }
}
