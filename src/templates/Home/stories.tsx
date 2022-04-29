import { ComponentStory, ComponentMeta } from '@storybook/react'

import Home from '.'

export default {
  title: 'Home',
  component: Home
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Basic = Template.bind({})
