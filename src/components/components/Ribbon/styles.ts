import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, ribbonColor: RibbonColors) => css`
    background-color: ${theme.colors[ribbonColor]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[ribbonColor])};
      border-top-color: ${darken(0.2, theme.colors[ribbonColor])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    right: -2rem;

    &::before {
      content: '';
      position: absolute;
      border-style: solid;
      top: 3.6rem;
      border-left-width: 1.8rem;
      border-top-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;

    &::before {
      top: 2.6rem;
      border-left-width: 0.02rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, ribbonColor, ribbonSize }) => css`
    position: absolute;
    color: ${theme.colors.white};

    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!ribbonSize && wrapperModifiers[ribbonSize](theme)}
    ${!!ribbonColor && wrapperModifiers.color(theme, ribbonColor)}
  `}
`
