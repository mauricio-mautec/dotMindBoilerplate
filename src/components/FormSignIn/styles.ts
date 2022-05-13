import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    text-align: right;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};

    &:hover {
      color: ${lighten(0.3, theme.colors.black)};
    }
  `}
`
