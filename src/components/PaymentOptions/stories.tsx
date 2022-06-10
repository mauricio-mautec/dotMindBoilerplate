import { ComponentStory, ComponentMeta } from '@storybook/react'

import PaymentOptions from '.'
import items from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions
} as ComponentMeta<typeof PaymentOptions>

const Template: ComponentStory<typeof PaymentOptions> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  label: 'Payment',
  cards: items
}
Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Basic.argTypes = {
  handlePayment: {
    action: 'clicked'
  }
}
