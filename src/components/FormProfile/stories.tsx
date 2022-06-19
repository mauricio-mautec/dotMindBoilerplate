import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile
} as ComponentMeta<typeof FormProfile>

const Template: ComponentStory<typeof FormProfile> = (args) => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  labelFormProfile: 'My Profile'
}
