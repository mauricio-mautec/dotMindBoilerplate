import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductInfo, { ProductInfoProps } from '.'
const props: ProductInfoProps = {
  title: 'Product Info',
  description: 'The Best Product',
  price: '$ 450.00'
}

describe('<ProductInfo />', () => {
  it('should render the title, description, value and buttons', () => {
    const { container } = renderWithTheme(<ProductInfo {...props} />)

    expect(screen.getByText(/product info/i)).toBeInTheDocument()
    expect(screen.getByText(/the best product/i)).toBeInTheDocument()
    expect(screen.getByText(/\$ 450.00/)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
