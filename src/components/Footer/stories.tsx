import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from '.'
import items from './mock'

export default {
  title: 'Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Basic = Template.bind({})

Basic.args = items
