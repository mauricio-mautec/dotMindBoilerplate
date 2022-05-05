import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

const multipleTemplate: ComponentStory<typeof Checkbox> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="action1"
        label="Action"
        labelFor="action1"
        value="Action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="action2"
        label="Adventure"
        labelFor="action2"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox label="Strategy" name="action3" labelFor="action3" {...args} />
    </div>
  </>
)
export const Basic = Template.bind({})
Basic.args = {
  label: 'ZappoliS',
  labelFor: 'action',
  labelColor: 'white'
}
Basic.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

export const Checked = Template.bind({})
Checked.args = {
  label: 'ZappoliS',
  labelFor: 'action',
  labelColor: 'black',
  isChecked: true
}
Checked.parameters = {
  backgrounds: {
    default: 'won-light'
  }
}

export const Multiple = multipleTemplate.bind({})
Multiple.args = {
  labelColor: 'white'
}
Multiple.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
