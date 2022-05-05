import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}
const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo id="banner" />

        <div>
          <Heading size="huge" color="white">
            All your favorite games in on place
          </Heading>

          <S.Subtiles>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtiles>
        </div>

        <S.Footer>Won Games 2020 Todos os Direitos</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Logo id="container" color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
