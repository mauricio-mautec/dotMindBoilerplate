import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

export type FormProfileProps = {
  labelFormProfile?: string
}
const FormProfile = ({ labelFormProfile }: FormProfileProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom size="small">
      {labelFormProfile}
    </Heading>
    <S.Form>
      <TextField label="Name" placeholder="John Cage" />

      <TextField
        label="E-mail"
        initialValue=""
        placeholder="johncage@gmail.com"
        disabled
        type="email"
      />

      <TextField
        label="Password"
        placeholder="Type your password"
        type="password"
      />

      <TextField
        label="New Password"
        placeholder="Type your new password"
        type="password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
