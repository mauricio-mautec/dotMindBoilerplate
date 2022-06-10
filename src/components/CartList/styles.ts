import styled, { css } from 'styled-components'
import { tint } from 'polished'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
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
  `}
`
export const Total = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
