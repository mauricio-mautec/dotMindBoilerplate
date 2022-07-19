import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CartIcon />)
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with Badge', () => {
    renderWithTheme(<CartIcon qtyItems={5} />)
    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/5/)).toBeInTheDocument()
  })

  it('should render with Badge only if qtyItems > 0', () => {
    renderWithTheme(<CartIcon qtyItems={-15} />)
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/-15/)).not.toBeInTheDocument()
  })
})
