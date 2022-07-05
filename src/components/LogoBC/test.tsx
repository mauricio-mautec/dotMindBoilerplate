import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import LogoBC from '.'

describe('<LogoBC />', () => {
  it('should render a svg image correclty', () => {
    // renderizar o componente 'render'
    // selecionar o componente a ser testado 'screen' (queries) - getByLabel
    // expect - assertion - asserção - análise (espero que renderize a logo branca)
    // procurando pelo label, automaticamente preocupamos com a acessibilidade
    renderWithTheme(<LogoBC />)
    expect(
      screen.getByLabelText(/burguer club/i).parentElement
    ).toBeInTheDocument()
  })

  // it('should render a bigger logo', () => {
  //   renderWithTheme(<LogoBC size="large" />)
  //   expect(screen.getByLabelText(/burguer club/i).parentElement).toHaveStyle({
  //     width: '20rem'
  //   })
  // })
  // it('should render a normal logo when size is default', () => {
  //   renderWithTheme(<LogoBC />)
  //   expect(screen.getByLabelText(/burguer club/i).parentElement).toHaveStyle({
  //     width: '11rem'
  //   })
  // })
  // it('should render a bigger logo without text if hideOnMobile', () => {
  //   renderWithTheme(<LogoBC hideOnMobile />)
  //   expect(
  //     screen.getByLabelText(/burguer club/i).parentElement
  //   ).toHaveStyleRule('width', '5.8rem', {
  //     media: '(max-width: 768px)'
  //   })
  // })
})
