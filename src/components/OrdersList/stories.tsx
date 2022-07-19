import { ComponentStory, ComponentMeta } from '@storybook/react'

import OrdersList from '.'
import itemsMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList
} as ComponentMeta<typeof OrdersList>

const Template: ComponentStory<typeof OrdersList> = (args) => (
  <div style={{ maxWidth: 840, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)

export const Basic = Template.bind({})
export const NoOrders = Template.bind({})

Basic.args = {
  labelOrdersList: 'My Orders',
  items: itemsMock
}
NoOrders.args = {
  labelOrdersList: 'My Orders'
}
