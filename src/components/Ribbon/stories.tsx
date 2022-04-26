import { ComponentStory, ComponentMeta } from '@storybook/react'

import Ribbon from '.'
// 1- PREPARAR UM CANVAS TESTE PARA O DESENVOLVIMENTO
export default {
  title: 'Ribbon',
  component: Ribbon
} as ComponentMeta<typeof Ribbon>

const Template: ComponentStory<typeof Ribbon> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)

export const Basic = Template.bind({})

Basic.args = {
  children: 'Best Seller'
}
