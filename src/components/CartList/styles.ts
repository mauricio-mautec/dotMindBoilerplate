import styled, { css } from 'styled-components'
import { tint } from 'polished'

import * as EmptyStyles from 'components/Empty/styles'

type WrapperProps = {
  isEmpty: boolean
}
export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty &&
    css`
      ${EmptyStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }
      ${EmptyStyles.Image} {
        max-width: 20rem;
      }
      ${EmptyStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }
      ${EmptyStyles.Description} {
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`
export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`
export const Total = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
