import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

// Para agrupar todos os blocos
export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    grid-template-columns: repeat(2, 1fr);
    margin-top: ${theme.spacings.small};
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(6, 1fr);
  `}
`

// 1 Bloco para cada descrição
export const Block = styled.div``

// Blocos compostos de Label e Descrição
export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    color: ${theme.colors.white};
  `}
`
export const Icon = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`
