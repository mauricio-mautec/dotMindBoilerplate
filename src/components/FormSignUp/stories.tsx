import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormSignUp from '.'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as ComponentMeta<typeof FormSignUp>

const Template: ComponentStory<typeof FormSignUp> = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  label: 'FormSignUp'
}
