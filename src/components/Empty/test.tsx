import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Empty, { EmptyProps } from '.'

const props: EmptyProps = {
  title: 'A simple title',
  description: 'A simple description',
  descriptionColor: 'white',
  imgSrc: '/img/empty.svg',
  imgAlt: 'A gamer in a couch playing videogame'
}
describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} />)
    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.description)).toBeInTheDocument()
  })

  it('should render correctly a button link', () => {
    const { container } = renderWithTheme(
      <Empty {...props} hasHomeLink labelHomeLink="Go back to store" />
    )

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not render a button link if labelHomeLink is missing', () => {
    renderWithTheme(<Empty {...props} hasHomeLink />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })

  it('should not render a link where hasLink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
