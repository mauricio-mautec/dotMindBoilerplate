import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProductInfo from '.'
import mockProduct from './mock'

export default {
  title: 'Product/ProductInfo',
  component: ProductInfo
} as ComponentMeta<typeof ProductInfo>

const Template: ComponentStory<typeof ProductInfo> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <ProductInfo {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = mockProduct
Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
