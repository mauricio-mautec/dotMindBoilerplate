import styled, { css, DefaultTheme } from 'styled-components'
import { ToggleButtonProps } from '.'
import { darken, lighten } from 'polished'

export type WrapperProps = Pick<ToggleButtonProps, 'size' | 'checked'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    svg {
      width: 1.6rem;
    }
    height: 3.5rem;
    font-size: ${theme.font.sizes.small};
    width: 13.2rem;
  `,
  medium: (theme: DefaultTheme) => css`
    svg {
      width: 1.8rem;
    }
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    width: 16rem;
  `,
  large: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;
    }
    height: 4.5rem;
    font-size: ${theme.font.sizes.large};
    width: 20rem;
  `,
  checked: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    svg {
      fill: ${theme.colors.black};
      stroke: ${theme.colors.white};
    }
    #mark {
      fill: ${theme.colors.tertiary};
      stroke: ${theme.colors.tertiary};
    }
    &:hover {
      background: ${lighten(0.2, theme.colors.black)};
      color: ${theme.colors.white};
      svg {
        fill: ${theme.colors.black};
        stroke: ${theme.colors.white};
      }
    }
  `
}
export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, checked }) => css`
    padding: ${theme.spacings.xxsmall};
    display: grid;
    gap: ${theme.spacings.xxsmall};
    grid-template-columns: 1fr 1fr 8fr;
    align-items: center;
    justify-items: start;
    & {
      justify-items: end;
    }
    margin-left: 0;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    border: 0.1rem solid ${theme.colors.black};
    border-radius: ${theme.border.radius};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background: ${darken(0.2, theme.colors.white)};
      color: ${theme.colors.black};
      svg {
        fill: ${darken(0.2, theme.colors.white)};
        stroke: ${theme.colors.black};
      }
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!checked && wrapperModifiers.checked(theme)}
  `}
`

const svgModifiers = {
  normal: (theme: DefaultTheme) => css`
    fill: ${theme.colors.white};
    stroke: ${theme.colors.black};
  `,
  checked: (theme: DefaultTheme) => css`
    fill: ${theme.colors.black};
    stroke: ${theme.colors.white};
  `
}

type ImageProps = Pick<ToggleButtonProps, 'checked'>
export const Image = styled.svg<ImageProps>`
  ${({ theme, checked }) => css`
    ${checked ? svgModifiers.checked(theme) : svgModifiers.normal(theme)}
  `}
`
