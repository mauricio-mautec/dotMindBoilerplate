import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as CardSliderStyles from 'components/CardSlider/styles'
import * as HighlightStyles from 'components/Highlight/styles'
import { Container } from 'components/Container'

// export const Wrapper = styled(Container).attrs({ as: 'section' })`
// => Todos os estilos de Container, que é um div, acrescidos das definições
// abaixo. attrs, transforma o div de container em uma section

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${CardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }
    ${CardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
