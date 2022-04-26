import Button2 from 'components/Button2'
import Ribbon, { RibbonProps } from 'components/Ribbon'
import * as S from './styles'

// 1 - CRIAR API

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonlabel: string
  buttonlink: string
} & RibbonProps

// 4 - CONSTRUIR A ESTRUTURA
const Banner = ({
  img,
  title,
  subtitle,
  buttonlabel,
  buttonlink,
  ribbonLabel,
  ribbonColor,
  ribbonSize
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
    {!!ribbonLabel && (
      <Ribbon
        ribbonSize={ribbonSize}
        ribbonColor={ribbonColor}
        ribbonLabel={ribbonLabel}
      />
    )}
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
