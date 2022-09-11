import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the heading', () => {
    //const { container } =
    renderWithTheme(<FormProfile labelFormProfile="FormProfile" />)
    expect(
      screen.getByRole('heading', { name: /FormProfile/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/name/i)).toBeInTheDocument()
    expect(screen.getByText(/e-mail/i)).toBeInTheDocument()

    expect(
      screen.getByPlaceholderText(/type your password/i)
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/type your new password/i)
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
    //expect(container.firstChild).toMatchSnapshot()
  })
})
