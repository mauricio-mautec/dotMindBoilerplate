import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'

import * as S from './styles'

export type FormSignUpProps = {
  label?: string
}
const FormSignUp = ({ label }: FormSignUpProps) => (
  <S.Wrapper>
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

    <S.FormLink>
      Already have an account?{' '}
      <Link href="/sign-in">
        <a>Sign In</a>
      </Link>
    </S.FormLink>
  </S.Wrapper>
)

export default FormSignUp
