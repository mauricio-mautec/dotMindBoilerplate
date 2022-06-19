import { ComponentStory, ComponentMeta } from '@storybook/react'
import list from 'components/PaymentOptions/mock'

import CardsList from '.'

export default {
  title: 'Profile/CardsList',
  component: CardsList
} as ComponentMeta<typeof CardsList>

const Template: ComponentStory<typeof CardsList> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  cards: list
}
