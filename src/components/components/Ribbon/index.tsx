import * as S from './styles'

// 3 - PASSAR NOS TESTES
export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  ribbonLabel?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Ribbon = ({
  ribbonLabel = 'Ribbon Label',
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: RibbonProps) => (
  <S.Wrapper ribbonColor={ribbonColor} ribbonSize={ribbonSize}>
    {ribbonLabel}
  </S.Wrapper>
)

export default Ribbon
