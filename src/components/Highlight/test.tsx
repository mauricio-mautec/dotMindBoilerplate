import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'My Title',
  subtitle: 'My Subtitle',
  buttonLabel: 'Buy now',
  buttonLink: '/r2d2',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render the title and subtitle', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /my subtitle/i })
    ).toBeInTheDocument()
  })

  it('should render a button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('link', { href: /r2d2/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align to left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/float-image.png" alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )
  })
})
