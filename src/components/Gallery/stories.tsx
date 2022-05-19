import { ComponentStory, ComponentMeta } from '@storybook/react'

import Gallery from '.'
import items from './mock'

export default {
  title: 'Gallery',
  component: Gallery
} as ComponentMeta<typeof Gallery>

const Template: ComponentStory<typeof Gallery> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  items: items,
  color: 'white'
}
Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
