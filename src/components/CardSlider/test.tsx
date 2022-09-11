import '../../../.jest/match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import CardSlider from '.'
import { ProductCardProps } from 'components/ProductCard'

const items: ProductCardProps[] = [
  {
    title: 'Population Zero',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Population Zero',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Population Zero',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Population Zero',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235,
    promotionalPrice: 215
  },
  {
    title: 'Population Zero',
    subtitle: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235,
    promotionalPrice: 215
  }
]

describe('<CardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<CardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
  it('should render white arrows if color passed', () => {
    renderWithTheme(<CardSlider items={items} color="white" />)
    expect(screen.getByLabelText(/next product/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
