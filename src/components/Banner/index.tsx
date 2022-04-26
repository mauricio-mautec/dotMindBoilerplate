import Button2 from 'components/Button2'
import * as S from './styles'

// 1 - CRIAR API
export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonlabel: string
  buttonlink: string
}

// 4 - CONSTRUIR A ESTRUTURA
const Banner = ({
  img,
  title,
  subtitle,
  buttonlabel,
  buttonlink
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button2 as="a" href={buttonlink} size="large">
        {buttonlabel}
      </Button2>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
