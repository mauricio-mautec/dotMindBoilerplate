import { ComponentStory, ComponentMeta } from '@storybook/react'
import { EmptyProps } from 'components/Empty'

import CartList from '.'
import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as ComponentMeta<typeof CartList>

const Template: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const Basic = Template.bind({})
export const WithButton = Template.bind({})
export const Empty = Template.bind({})

Basic.args = {
  items: items,
  total: 'R$ 330,00'
}

WithButton.args = {
  items: items,
  total: 'R$ 330,00',
  hasButton: true
}

const emptyCart: EmptyProps = {
  description: 'Items added to your cart appear here.',
  title: 'Your cart is empty',
  descriptionColor: 'black',
  imgAlt: 'A gamer playing video game',
  imgSrc: '/img/empty.svg',
  hasHomeLink: true,
  labelHomeLink: 'Go back to store'
}

Empty.args = {
  emptyCart
}
