import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})
export const withIcon = Template.bind({})
export const asLink = Template.bind({})
export const asDisabledButton = Template.bind({})

Basic.args = {
  children: 'Buy Now',
  size: 'medium'
}
Basic.argTypes = {
  icon: {
    table: {
      disable: true
    }
  },
  as: {
    control: 'select',
    options: ['a', 'button']
  }
}

withIcon.args = {
  children: 'Buy Now Icon',
  size: 'small',
  icon: <AddShoppingCart />
}
withIcon.argTypes = {
  icon: {
    table: {
      disable: true
    }
  },
  as: {
    control: 'select',
    options: ['a', 'button']
  }
}

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
asLink.argTypes = {
  icon: {
    table: {
      disable: true
    }
  },
  as: {
    table: { disable: true }
  }
}
asDisabledButton.args = {
  size: 'large',
  children: 'Buy now',
  as: 'button',
  href: '/link',
  disabled: true
}
asDisabledButton.argTypes = {
  icon: {
    table: {
      disable: true
    }
  },
  as: {
    table: { disable: true }
  }
}
