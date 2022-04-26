import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProdutCard from '.'

export default {
  title: 'ProdutCard',
  component: ProdutCard
} as ComponentMeta<typeof ProdutCard>

const Template: ComponentStory<typeof ProdutCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <ProdutCard {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'Product Card',
  subtitle: 'dotMind Developement Group',
  img: '/img/product-card.png',
  background: 'gray',
  price: 'R$ 432,00',
  promotionalPrice: ''
}

Basic.argTypes = {
  onFav: { action: 'clicked' }
}

export const Promo = Template.bind({})
Promo.args = {
  title: 'Product Card',
  subtitle: 'dotMind Developement Group',
  img: '/img/product-card.png',
  background: 'gray',
  price: 'R$ 432,00',
  promotionalPrice: 'R$ 300,00'
}

Promo.argTypes = {
  onFav: { action: 'clicked' }
}

export const Ribbon = Template.bind({})
Ribbon.args = {
  title: 'Product Card',
  subtitle: 'dotMind Developement Group',
  img: '/img/product-card.png',
  background: 'gray',
  price: 'R$ 432,00',
  promotionalPrice: 'R$ 345,60',
  ribbonLabel: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'secondary'
}

Ribbon.argTypes = {
  onFav: { action: 'clicked' }
}
