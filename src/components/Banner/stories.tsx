import { ComponentStory, ComponentMeta } from '@storybook/react'

// 3 - PASSAR OS ARGUMENTOS QUE O BANNER PODE RECEBER
import Banner from '.'

export default {
  title: 'Banner',
  component: Banner
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => (
  <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const Basic = Template.bind({})
Basic.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

export const Ribbon = Template.bind({})

Ribbon.args = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Ribbon Glory',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
  ribbonLabel: 'Bestseller'
}
