import { ComponentStory, ComponentMeta } from '@storybook/react'

import Highlight from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as ComponentMeta<typeof Highlight>

const Template: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/r2d2',
  backgroundImage: '/img/red-dead-img.jpg',
  alignment: 'right'
}

export const withImage = Template.bind({})

withImage.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/r2d2',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png',
  alignment: 'right'
}
