import styled from 'styled-components'
import * as ProductItemStyles from 'components/ProductItem/styles'

export const Wrapper = styled.div`
  ${ProductItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
