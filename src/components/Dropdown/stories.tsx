import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown from '.'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  title: 'Click here',
  children: 'content'
}
