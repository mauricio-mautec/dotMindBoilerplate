import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('Renders with placeholder', () => {
    const { container } = renderWithTheme(
      <FormSignIn
        labelButton="Sign in now"
        labelLinkPassword="Forgot your password?"
        labelLinkAccount="Do not have an account?"
      />
    )

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /forgot your password/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in now/i }))
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument()
    expect(screen.getByText(/do not have an account?/i)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
