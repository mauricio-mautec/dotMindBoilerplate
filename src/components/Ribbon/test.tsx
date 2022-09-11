import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'
import Ribbon from '.'

// 2 - DESENVOLVER OS TESTES

describe('<Ribbon />', () => {
  it('should render the text and default color correctly', () => {
    renderWithTheme(<Ribbon ribbonLabel="Best Seller" />)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: theme.colors.primary
    })
  })

  it('should render with secondary color', () => {
    renderWithTheme(
      <Ribbon ribbonColor="secondary" ribbonLabel="Best Seller" />
    )

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render with normal size as default', () => {
    renderWithTheme(<Ribbon ribbonLabel="Best Seller" />)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render a small size', () => {
    renderWithTheme(<Ribbon ribbonSize="small" ribbonLabel="Best Seller" />)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
