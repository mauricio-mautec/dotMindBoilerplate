import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckboxChecked } from 'styled-icons/fluentui-system-regular'

import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

const multipleTemplate: ComponentStory<typeof Checkbox> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="action"
        label="Action"
        labelFor="action1"
        value="Action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="action"
        label="Adventure"
        labelFor="action2"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox label="Strategy" name="action" labelFor="action3" {...args} />
    </div>
  </>
)
export const Basic = Template.bind({})

Basic.args = {
  label: 'ZappoliS',
  labelFor: 'action',
  labelColor: 'black'
}

export const Checked = Template.bind({})

Checked.args = {
  label: 'ZappoliS',
  labelFor: 'action',
  labelColor: 'black',
  isChecked: true
}

export const Multiple = multipleTemplate.bind({})

Multiple.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
