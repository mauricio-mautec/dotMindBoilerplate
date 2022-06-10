import { ComponentStory, ComponentMeta } from '@storybook/react'

import Empty from '.'

export default {
  title: 'Empty',
  component: Empty
} as ComponentMeta<typeof Empty>

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />

export const Basic = Template.bind({})

Basic.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist appear here',
  descriptionColor: 'white',
  imgSrc: '/img/empty.svg',
  imgAlt: 'A gamer in a couch playing videogame',
  hasHomeLink: true,
  labelHomeLink: 'Go back to store'
}
Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
