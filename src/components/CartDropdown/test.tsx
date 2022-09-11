import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartDropdown from '.'

import items from 'components/CartList/mock'
import { EmptyProps } from 'components/Empty'

const props: EmptyProps = {
  title: 'A simple title',
  description: 'A simple description',
  descriptionColor: 'white',
  imgSrc: '/img/empty.svg',
  imgAlt: 'A gamer in a couch playing videogame'
}
describe('<CartDropdown />', () => {
  it('should render <Carticon /> and its badge the heading', () => {
    //const { container } =
    renderWithTheme(
      <CartDropdown items={items} total="R$ 330,00" emptyCart={props} />
    )
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(
      <CartDropdown items={items} total="R$ 330,00" emptyCart={props} />
    )

    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
