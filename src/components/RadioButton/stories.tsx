import { ComponentStory, ComponentMeta } from '@storybook/react'

import RadioButton from '.'
import items from './mock'

export default {
  title: 'RadioButton',
  component: RadioButton
} as ComponentMeta<typeof RadioButton>

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  items: items
}
