import styled, { css } from 'styled-components'

// Alteração para o menu, que fica dentro do Container, ocupar toda a parte superior da tela
// até o max-widht: add width: 100%
// ajuste necessário após template Base ter sido alterado para jogar o footer na parte de baixo da tela
// idependende do tamanho da mesma
export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc({$theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
