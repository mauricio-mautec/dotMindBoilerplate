import { ComponentStory, ComponentMeta } from '@storybook/react'

import LogoBC from '.'

export default {
  title: 'LogoBC',
  component: LogoBC
} as ComponentMeta<typeof LogoBC>

const Template: ComponentStory<typeof LogoBC> = (args) => <LogoBC {...args} />

export const Basic = Template.bind({})
