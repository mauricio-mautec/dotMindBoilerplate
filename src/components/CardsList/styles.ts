import styled, { css } from 'styled-components'

export const Wrapper = styled.main``
export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray_light};
    color: ${theme.colors.black};
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
