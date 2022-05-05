import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormSignIn from '.'

export default {
  title: 'FormSignIn',
  component: FormSignIn
} as ComponentMeta<typeof FormSignIn>

const Template: ComponentStory<typeof FormSignIn> = (args) => <FormSignIn {...args} />

export const Basic = Template.bind({})
