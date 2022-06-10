import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as ComponentMeta<typeof ProfileMenu>

const Template: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
)

export const Basic = Template.bind({})

Basic.args = {}

Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

export const withActiveLink = Template.bind({})
withActiveLink.args = {
  activeLink: '/profile/cards'
}

withActiveLink.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

withActiveLink.argTypes = {
  activeLink: {
    control: {
      type: 'radio',
      options: ['/profile/me', '/profile/cards', '/profile/orders']
    }
  }
}
