import Link from 'next/link'
import { Lock, Email } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

export type FormSignInProps = {
  labelButton: string
  labelLinkPassword: string
  labelLinkAccount: string
}
const FormSignIn = ({
  labelButton = 'Sign in now',
  labelLinkPassword = 'Forgot your password?',
  labelLinkAccount = 'Do not have an account?'
}: FormSignInProps) => (
  <FormWrapper>
    <TextField name="email" placeholder="Email" type="email" icon={<Email />} />
    <TextField
      name="password"
      placeholder="Password"
      type="password"
      icon={<Lock />}
    />

    <S.ForgotPassword href="#">{labelLinkPassword}</S.ForgotPassword>

    <Button size="large" fullWidth>
      {labelButton}
    </Button>

    <FormLink>
      {labelLinkAccount}{' '}
      <Link href="/sign-up">
        <a>Sign up</a>
      </Link>
    </FormLink>
  </FormWrapper>
)

export default FormSignIn
