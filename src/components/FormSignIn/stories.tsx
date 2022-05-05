import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as ComponentMeta<typeof FormSignIn>

const Template: ComponentStory<typeof FormSignIn> = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  label: 'FormSignIn'
}
