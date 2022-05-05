import Link from 'next/link'
import { Lock, Email } from '@styled-icons/material-outlined'

import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

export type FormSignInProps = {
  label?: string
}
const FormSignIn = ({ label = 'label' }: FormSignInProps) => (
  <S.Wrapper>
    <TextField name="email" placeholder="Email" type="email" icon={<Email />} />
    <TextField
      name="password"
      placeholder="Password"
      type="password"
      icon={<Lock />}
    />
    <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

    <Button size="large" fullWidth>
      Sign in now
    </Button>

    <S.FormLink>
      Don't have an account?{' '}
      <Link href="/sign-up">
        <a>Sign up</a>
      </Link>
    </S.FormLink>
  </S.Wrapper>
)

export default FormSignIn
