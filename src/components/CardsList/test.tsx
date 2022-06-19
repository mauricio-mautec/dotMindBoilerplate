import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import cardsMock from 'components/PaymentOptions/mock'

import CardsList from '.'

describe('<CardsList />', () => {
  it('should render the heading', () => {
    //const { container } =
    renderWithTheme(<CardsList labelCardsList="CardsList" cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /CardsList/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/cards/visa.png'
    )
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/cards/mastercard.png'
    )
    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
    //expect(container.firstChild).toMatchSnapshot()
  })
})
