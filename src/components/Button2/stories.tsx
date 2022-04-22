import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button2 from '.'

export default {
  title: 'Button2',
  component: Button2
} as ComponentMeta<typeof Button2>

const Template: ComponentStory<typeof Button2> = (args) => <Button2 {...args} />

export const Basic = Template.bind({})
export const withIcon = Template.bind({})
export const asLink = Template.bind({})

Basic.args = {
  children: 'Buy Now',
  size: 'medium'
}

withIcon.args = {
  children: 'Buy Now Icon',
  size: 'small',
  icon: <AddShoppingCart />
}

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
