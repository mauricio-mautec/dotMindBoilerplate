import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente 'render'
    // selecionar o componente a ser testado 'screen' (queries) - getByLabel
    // expect - assertion - asserção - análise (espero que renderize a logo branca)
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
