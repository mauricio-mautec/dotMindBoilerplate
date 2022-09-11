import { ComponentStory, ComponentMeta } from '@storybook/react'

import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartIcon>

const Template: ComponentStory<typeof CartIcon> = (args) => (
  <CartIcon {...args} />
)

export const Basic = Template.bind({})

Basic.args = {}

export const WithBadge = Template.bind({})

WithBadge.args = {
  qtyItems: 5
}
