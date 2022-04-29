import * as S from './styles'

import { LineColors } from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'black' | 'white'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium'
  lineColor?: LineColors
}
const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
