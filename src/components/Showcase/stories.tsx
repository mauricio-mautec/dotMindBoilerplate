import { ComponentStory, ComponentMeta } from '@storybook/react'
import * as S from './styles'

import Showcase from '.'
import items from './mock'

export default {
  title: 'Showcase',
  component: Showcase
} as ComponentMeta<typeof Showcase>

const Template: ComponentStory<typeof Showcase> = (args) => (
  <div style={{ margin: '0 auto' }}>
    <S.Wrapper>
      <Showcase {...args} />
    </S.Wrapper>
  </div>
)

export const Completo = Template.bind({})
Completo.args = {
  heading: {
    lineLeft: true,
    lineColor: 'primary',
    children: 'Test Heading',
    color: 'white'
  },
  highlight: {
    title: 'This is Sparta!',
    subtitle: 'only 300',
    buttonLabel: 'Buy Now',
    buttonLink: '/r2d2',
    floatImage: '/img/red-dead-float.png',
    backgroundImage: '/img/red-dead-img.jpg'
  },
  cardslider: { items }
}
Completo.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
export const Heading = Template.bind({})
Heading.args = {
  heading: {
    lineLeft: true,
    lineColor: 'primary',
    children: 'Test Heading'
  }
}

export const Highlight = Template.bind({})
Highlight.args = {
  highlight: {
    title: 'This is Sparta!',
    subtitle: 'only 300',
    buttonLabel: 'Buy Now',
    buttonLink: '/r2d2',
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/red-dead-float.png',
    alignment: 'left'
  }
}

export const CardSlider = Template.bind({})
CardSlider.args = {
  cardslider: { items }
}
