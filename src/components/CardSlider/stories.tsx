import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductCardProps } from 'components/ProductCard'

import CardSlider from '.'

export default {
  title: 'CardSlider',
  component: CardSlider
} as ComponentMeta<typeof CardSlider>

const items: ProductCardProps[] = [
  {
    title: 'Population Zero 1',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 2',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 3',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 4',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 5',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero 6',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]
const Template: ComponentStory<typeof CardSlider> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardSlider {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = { items }
Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
