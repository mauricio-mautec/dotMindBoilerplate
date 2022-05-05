import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" data-testid="CHILDREN" />
      </Auth>
    )

    // verifica se tem 2 logos
    const logos = screen.getAllByLabelText(/won games/i)
    expect(logos[0].parentElement).toHaveAttribute('color', 'white')
    expect(logos[1].parentElement).toHaveAttribute('color', 'black')
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // verifica se tem o heading do banner
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in on place/i
      })
    ).toBeInTheDocument()

    // verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument()

    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', {
        name: /Auth title/i
      })
    ).toBeInTheDocument()

    // verifica se o children está sendo renderizado
    expect(screen.getByTestId('CHILDREN')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
