import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import items from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={items} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={items} total="R$ 330" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })
})
