import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProductItem from '.'

export default {
  title: 'Product/ProductItem',
  component: ProductItem
} as ComponentMeta<typeof ProductItem>

const Template: ComponentStory<typeof ProductItem> = (args) => (
  <ProductItem {...args} />
)

export const Basic = Template.bind({})
export const withIcon = Template.bind({})
export const withPaymentInfo = Template.bind({})

const args = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Read Dead Redemption 2',
  price: 'R$ 215,00'
}

Basic.args = args

withIcon.args = {
  ...args,
  downloadLink: 'http://Link'
}

const paymentInfo = {
  flag: 'mastercard',
  img: '/img/cards/mastercard.png',
  number: '*** *** **** 4326',
  purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
}

withPaymentInfo.args = {
  ...args,
  downloadLink: 'http://Link',
  paymentInfo: paymentInfo
}
