import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifier = {
  normal: () => css`
    width: 5rem;
    height: 1.3rem;
  `,
  large: () => css`
    width: 10rem;
    heigth: 3rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, size, hideOnMobile }) => css`
    ${!!size && wrapperModifier[size]};
    ${!!hideOnMobile && wrapperModifier.hideOnMobile};
  `}
`
export const SVGWrapper = styled.svg`
  fill: #f2c22f;

.base2 {
  fill: #B93325;
}

.base3 {
  fill: #4A1C0A;
}

.base4 {
  fill: #321710;
}


#logo {
transform-origin: 0 0;
animation: color 3s steps(200);
fill: #f2c22f;
}


#TR {
  transform-origin: center center;
  animation: color 3s steps(100) alternate infinite;
}

@keyframes color {
   0% {fill: #321710}
  50% {fill: #4A1C0A}
  75% {fill: #B93325}
 100% {fill: #f2c22f}
}

`
