import * as S from './styles'

export type FormSignInProps = {
    label?:string
}
const FormSignIn = ({label}:FormSignInProps) => (
  <S.Wrapper>
    <h1>{label}</h1>
  </S.Wrapper>
)

export default FormSignIn
