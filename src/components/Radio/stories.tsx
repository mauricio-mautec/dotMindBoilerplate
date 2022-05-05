import { ComponentStory, ComponentMeta } from '@storybook/react'

import Radio from '.'

export default {
  title: 'Form/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        {...args}
      />
    </div>
  </>
)

export const Basic = Template.bind({})

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
