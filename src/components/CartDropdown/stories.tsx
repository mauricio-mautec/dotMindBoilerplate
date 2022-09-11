import { ComponentStory, ComponentMeta } from '@storybook/react'

import CartDropdown from '.'

import items from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartDropdown>

const Template: ComponentStory<typeof CartDropdown> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  items,
  total: 'R$ 330,00'
}

export const withoutItems = Template.bind({})

withoutItems.args = {
  total: 'R$ 0,00'
}
