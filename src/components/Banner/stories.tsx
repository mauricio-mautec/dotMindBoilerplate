import { ComponentStory, ComponentMeta } from '@storybook/react'

// 3 - PASSAR OS ARGUMENTOS QUE O BANNER PODE RECEBER
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />

export const Basic = Template.bind({})

Basic.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonlabel: 'Buy now',
  buttonlink: '/games/defy-death'
}

Basic.parameters = {
  layout: 'fullscreen'
}
