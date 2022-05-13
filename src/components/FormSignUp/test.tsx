import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('Renders with placeholder', () => {
    const { container } = renderWithTheme(
      <FormSignUp labelLinkAccount="Already have an account?" />
    )

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /create account/i }))
    expect(screen.getByRole('link', { name: /Sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/already have an account?/i)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
