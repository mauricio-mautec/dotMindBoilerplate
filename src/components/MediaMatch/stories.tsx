import { ComponentStory, ComponentMeta } from '@storybook/react'

import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as ComponentMeta<typeof MediaMatch>

const Template: ComponentStory<typeof MediaMatch> = (args) => (
  <MediaMatch {...args} />
)

export const Desktop = Template.bind({})

Desktop.args = {
  children: 'Only on Desktop',
  greaterThan: 'medium'
}

export const Mobile = Template.bind({})

Mobile.args = {
  children: 'Only on Mobile',
  lessThan: 'medium'
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
