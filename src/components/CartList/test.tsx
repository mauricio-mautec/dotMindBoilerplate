import { screen } from '@testing-library/react'
import { EmptyProps } from 'components/Empty'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import items from './mock'

const emptyCartProps: EmptyProps = {
  title: 'A simple title',
  description: 'A simple description',
  descriptionColor: 'white',
  imgSrc: '/img/empty.svg',
  imgAlt: 'A gamer in a couch playing videogame'
}
describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={items} total="R$ 330,00" emptyCart={emptyCartProps} />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(
      <CartList
        items={items}
        total="R$ 330"
        hasButton
        emptyCart={emptyCartProps}
      />
    )
    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })
})
