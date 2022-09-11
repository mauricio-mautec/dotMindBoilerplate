import styled from 'styled-components'
import { Wrapper as CartWrapperStyles } from 'components/CartList/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${CartWrapperStyles} {
    width: 26rem;
  }
  ${media.greaterThan('medium')`
    ${CartWrapperStyles} {
      width: 36rem;
    }
  `}
`
