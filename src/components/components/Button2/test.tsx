import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button2 from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button2>Buy Now</Button2>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the small size', () => {
    renderWithTheme(<Button2 size="small">Buy Now</Button2>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })
  it('should render the large size', () => {
    renderWithTheme(<Button2 size="large">Buy Now</Button2>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })
  it('should render a fullWidth version', () => {
    renderWithTheme(<Button2 fullWidth>Buy Now</Button2>)
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })
  it('should render a icon version', () => {
    renderWithTheme(
      <Button2 icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button2>
    )
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button2 as a link', () => {
    // const { debug, container } = renderWithTheme(
    renderWithTheme(
      <Button2 as="a" href="/link">
        Buy now
      </Button2>
    )

    // debug(container)

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render Button2 as a button', () => {
    renderWithTheme(<Button2 disabled>Buy now</Button2>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveAttribute(
      'disabled',
      ''
    )
  })
})
