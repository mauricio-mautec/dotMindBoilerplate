import Button from 'components/Button'
import Ribbon, { RibbonProps } from 'components/Ribbon'
import * as S from './styles'

// 1 - CRIAR API

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
} & RibbonProps

// 4 - CONSTRUIR A ESTRUTURA
const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
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
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
