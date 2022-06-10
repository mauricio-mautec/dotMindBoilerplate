import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Email } from 'styled-icons/material-outlined'

import TextField from '.'

export default {
  title: 'Form/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  label: 'E-mail',
  labelFor: 'Email',
  id: 'Email',
  initialValue: '',
  placeholder: 'mauricio@zappolis.com'
}

export const withIcon = Template.bind({})

withIcon.args = {
  label: 'E-mail',
  labelFor: 'Email',
  id: 'Email',
  initialValue: '',
  icon: <Email />
}

withIcon.argTypes = {
  icon: {
    table: {
      disable: true
    }
  }
}

export const withIconError = Template.bind({})

withIconError.args = {
  label: 'E-mail',
  labelFor: 'Email',
  id: 'Email',
  initialValue: '',
  placeholder: 'mauricio@zappolis.com',
  icon: <Email />,
  wrong: 'Ops..something is wrong!'
}

withIconError.argTypes = {
  icon: {
    table: {
      disable: true
    }
  }
}
