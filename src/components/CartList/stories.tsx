import { ComponentStory, ComponentMeta } from '@storybook/react'

import CartList from '.'
import items from './mock'

export default {
  title: 'CartList',
  component: CartList
} as ComponentMeta<typeof CartList>

const Template: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  items: items,
  total: 'R$ 330,00'
}
Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

export const WithButton = Template.bind({})

WithButton.args = {
  items: items,
  total: 'R$ 330,00',
  hasButton: true
}
WithButton.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
