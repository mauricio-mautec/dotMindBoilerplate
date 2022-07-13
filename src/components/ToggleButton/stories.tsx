import { ComponentStory, ComponentMeta } from '@storybook/react'

import ToggleButton from '.'

export default {
  title: 'ToggleButton',
  component: ToggleButton
} as ComponentMeta<typeof ToggleButton>

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
)
const multipleTemplate: ComponentStory<typeof ToggleButton> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <ToggleButton {...args} tag="Ano" label="Ano" />
    </div>
    <div style={{ padding: 10 }}>
      <ToggleButton {...args} tag="Modelo" label="Modelo" />
    </div>
    <div style={{ padding: 10 }}>
      <ToggleButton {...args} checked tag="Marca" label="Marca" />
    </div>
  </>
)
export const Basic = Template.bind({})

Basic.args = {
  label: 'Yamaha',
  size: 'small',
  icon: '/img/icons/Icons.svg#Filter',
  checked: false
}

export const Multiple = multipleTemplate.bind({})

Multiple.args = {
  size: 'small',
  icon: '/img/icons/Icons.svg#Search'
}
