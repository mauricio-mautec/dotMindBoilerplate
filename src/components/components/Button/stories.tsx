import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
export const withIcon = Template.bind({})

Basic.args = {
  children: 'Buy Now',
  size: 'medium'
}

withIcon.args = {
  children: 'Buy Now Icon',
  size: 'small',
  icon: <AddShoppingCart />
}
