import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

import items from './mock'

describe('<Showcase />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <Showcase
        heading={{
          lineLeft: true,
          lineColor: 'primary',
          children: 'Test Heading'
        }}
      />
    )
    expect(screen.getByRole('heading', { name: /test heading/i }))
      .toBeInTheDocument
  })
  it('should render the highlight', () => {
    renderWithTheme(
      <Showcase
        highlight={{
          title: 'This is Sparta!',
          subtitle: 'only 300',
          buttonLabel: 'Buy Now',
          buttonLink: '/r2d2',
          backgroundImage: '/img/red-dead-img.jpg'
        }}
      />
    )
    expect(screen.getByRole('heading', { name: /this is sparta/i }))
      .toBeInTheDocument
  })
  it('should render the cardslider with 4 active items', () => {
    const { container } = renderWithTheme(
      <Showcase cardslider={{ items: items }} />
    )
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
  it('should render the heading, highlight and cardslider', () => {
    const { container } = renderWithTheme(
      <Showcase
        heading={{
          lineLeft: true,
          lineColor: 'primary',
          children: 'Test Heading'
        }}
        highlight={{
          title: 'This is Sparta!',
          subtitle: 'only 300',
          buttonLabel: 'Buy Now',
          buttonLink: '/r2d2',
          backgroundImage: '/img/red-dead-img.jpg'
        }}
        cardslider={{ items: items, color: 'white' }}
      />
    )
    expect(screen.getByRole('heading', { name: /test heading/i }))
      .toBeInTheDocument
    expect(screen.getByRole('heading', { name: /this is sparta/i }))
      .toBeInTheDocument
    expect(screen.getByLabelText(/next product/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})
