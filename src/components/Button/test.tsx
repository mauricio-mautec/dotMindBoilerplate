import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
    expect(container.firstChild).toMatchSnapshot('default')
  })
  it('should render the small size', () => {
    const { container } = renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
    expect(container.firstChild).toMatchSnapshot('small')
  })
  it('should render the large size', () => {
    const { container } = renderWithTheme(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
    expect(container.firstChild).toMatchSnapshot('large')
  })
  it('should render a fullWidth version', () => {
    const { container } = renderWithTheme(<Button fullWidth>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
    expect(container.firstChild).toMatchSnapshot('fullwidth')
  })
  it('should render a icon version', () => {
    const { container } = renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot('icon')
  })
})
