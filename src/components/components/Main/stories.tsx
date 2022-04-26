import { ComponentStory, ComponentMeta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Valores Padrão em caso de não definição',
    description: 'Descrição padrão em caso de não definição'
  }
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Basic = Template.bind({})
export const Advanced = Template.bind({})
export const Complex = Template.bind({})

// Virão de index.tsx automaticamente pela não definição das linhas abaixo ou
// de args se houver em export default
// Basic.args = {
//   title: 'React Avançado Basic Args',
//   description: 'TypeScript, ReactJS, NextJs e Styled Components'
// }

Advanced.args = {
  title: 'React Advanced Args The Best',
  description: 'TypeScript, ReactJS, NextJs e Styled Components'
}

Complex.args = {
  title: 'React Complex Args',
  description: 'TypeScript, ReactJS, NextJs e Styled Components'
}
