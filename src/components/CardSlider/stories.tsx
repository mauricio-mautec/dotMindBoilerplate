import { ComponentStory, ComponentMeta } from '@storybook/react'
import CardSlider from '.'

import items from './mock'

export default {
  title: 'CardSlider',
  component: CardSlider
} as ComponentMeta<typeof CardSlider>

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
    default: 'won-dark'
  }
}
