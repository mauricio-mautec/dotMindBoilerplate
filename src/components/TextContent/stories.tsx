import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextContent from '.'
import TextContentMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent
} as ComponentMeta<typeof TextContent>

const Template: ComponentStory<typeof TextContent> = (args) => (
  <TextContent {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  title: TextContentMock.title,
  content: TextContentMock.content
}
Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
