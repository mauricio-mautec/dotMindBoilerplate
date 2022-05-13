import { ComponentStory, ComponentMeta } from '@storybook/react'

import GameDetails from '.'
import mockGames from './mock'

export default {
  title: 'Product/GameDetails',
  component: GameDetails
} as ComponentMeta<typeof GameDetails>

const Template: ComponentStory<typeof GameDetails> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = mockGames
Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
Basic.argTypes = {
  platforms: {
    control: {
      type: 'inline-check',
      options: ['windows', 'mac', 'linux']
    }
  },
  genres: {
    control: {
      type: 'inline-check',
      options: ['Role-playing', 'FPS', 'Narrative']
    }
  }
}
