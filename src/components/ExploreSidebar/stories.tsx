import { ComponentStory, ComponentMeta } from '@storybook/react'

import dados from './mock'

import ExploreSidebar from '.'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar
} as ComponentMeta<typeof ExploreSidebar>

const Template: ComponentStory<typeof ExploreSidebar> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      onFilter={(v) => {
        console.log(v)
      }}
    />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  items: dados
}

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

export const WithInitialValues = Template.bind({})

WithInitialValues.args = {
  items: dados,
  initialValues: { windows: true, sort_by: 'low-to-high', rpg: true }
}

WithInitialValues.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
