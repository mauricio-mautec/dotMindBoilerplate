import Heading, { HeadingProps } from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import CardSlider, { CardSliderProps } from 'components/CardSlider'

import * as S from './styles'

export type ShowcaseProps = {
  highlight?: HighlightProps
  heading?: HeadingProps
  cardslider?: CardSliderProps
}

const Showcase = ({ highlight, heading, cardslider }: ShowcaseProps) => (
  <S.Wrapper>
    {!!heading && <Heading {...heading} />}
    {!!highlight && <Highlight {...highlight} />}
    {!!cardslider && <CardSlider {...cardslider} />}
  </S.Wrapper>
)

export default Showcase
