import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import TextContent from '.'
import props from './mock'

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)
    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i, level: 1 })
    ).toBeInTheDocument()
  })

  it('should render without the title', () => {
    renderWithTheme(<TextContent content={props.content} />)
    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i, level: 1 })
    ).toBeInTheDocument()
  })

  it('should render the styles correctly', () => {
    renderWithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: theme.colors.white
    })
    expect(wrapper).toHaveStyleRule('color', theme.colors.black, {
      media: '(min-width: 768px)'
    })
  })
})
