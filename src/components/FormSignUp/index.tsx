import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'

import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'
import { FormWrapper, FormLink } from 'components/Form'
export type FormSignUpProps = {
  labelLinkAccount: string
}
const FormSignUp = ({
  labelLinkAccount = 'Already have an account?'
}: FormSignUpProps) => (
  <FormWrapper>
    <TextField
      name="name"
      placeholder="Name"
      type="name"
      icon={<AccountCircle />}
    />
    <TextField name="email" placeholder="Email" type="email" icon={<Email />} />
    <TextField
      name="password"
      placeholder="Password"
      type="password"
      icon={<Lock />}
    />
    <TextField
      name="confirmation"
      placeholder="Confirm Password"
      type="password"
      icon={<Lock />}
    />

    <Button size="large" fullWidth>
      Create Account
    </Button>

    <FormLink>
      {labelLinkAccount}{' '}
      <Link href="/sign-in">
        <a>Sign In</a>
      </Link>
    </FormLink>
  </FormWrapper>
)

export default FormSignUp
