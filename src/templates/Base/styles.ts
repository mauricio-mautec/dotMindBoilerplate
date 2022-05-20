import styled, { css } from 'styled-components'
import media from 'styled-media-query'

// Tecnica para colocar o footer no final da tela.
// trocou um <section> pelo <S.Wrapper>
// um embaixo do outro flex-direction
// para ir para baixo height
// para espaçar justify-content
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`
// Container para relocar {children} para ocupar a parte inicial da
// tela após o <Menu>
export const Content = styled.div`
  flex: 1 0 auto;
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
       padding-top: calc(${theme.spacings.xxlarge} * 2);
       clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
     `}
  `}
`
