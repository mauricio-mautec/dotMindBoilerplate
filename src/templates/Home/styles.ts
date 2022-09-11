import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as CardSliderStyles from 'components/CardSlider/styles'
import * as HighlightStyles from 'components/Highlight/styles'

const Sections = styled.section`
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
export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`
export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);
    ${media.greaterThan('large')`
       margin-top: -13rem;
     `}
    ${media.greaterThan('medium')`
       margin-bottom: 0;
       padding-top: 14rem;
       padding-bottom: 10rem;
       background-color: ${theme.colors.background_light};
       clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
       ${HeadingStyles.Wrapper} {
         color: ${theme.colors.black};
       }
     `}
  `}
`

export const SectionMostPopular = styled(Sections)``
export const SectionFreeGames = styled(Sections)``

export const SectionUpcoming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`
