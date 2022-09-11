import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="UserDropdown" />)
    expect(screen.getByText(/UserDropdown/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    renderWithTheme(<UserDropdown username="UserDropdown" />)

    expect(screen.getByText(/my profile/i).parentElement).toHaveAttribute(
      'href',
      '/profile/me'
    )
    expect(screen.getByText(/wishlist/i).parentElement).toHaveAttribute(
      'href',
      '/wishlist'
    )
    expect(screen.getByText(/sign out/i).parentElement).toHaveAttribute(
      'href',
      '/logout'
    )
  })

  it('should render the open the menu', async () => {
    renderWithTheme(<UserDropdown username="UserDropdown" />)

    await userEvent.click(screen.getByText(/userdropdown/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
