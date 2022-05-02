import styled, { css } from 'styled-components'
import { CheckboxProps } from '.'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1.8rem;
    color: ${theme.colors[labelColor!]};
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 0.2rem;
    transition: background border ${theme.transition.fast};
    outline: none;
    position: relative;
    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      transition: ${theme.transition.fast};
      opacity: 0;
      position: absolute;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      top: 0.1rem;
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    &:checked {
      &:before {
        opacity: 1;
      }
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};
    }
  `}
`
