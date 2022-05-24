import '../../../.jest/match-media-mock'

import gameInfoMock from 'components/ProductInfo/mock'
import galleryMock from 'components/Gallery/mock'
import descriptionMock from 'components/TextContent/mock'
import detailsMock from 'components/GameDetails/mock'
import upcomingHighLightMock from 'components/Highlight/mock'
import upcomingGamesMock from 'components/CardSlider/mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Game from '.'
const props = {
  cover: 'background-img.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: descriptionMock.content,
  details: detailsMock,
  upcomingGames: upcomingGamesMock,
  upcomingHighlight: upcomingHighLightMock,
  recommendedGames: upcomingGamesMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/ProductInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ProductInfo"></div>
    }
  }
})

jest.mock('components/TextContent', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock TextContent"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails"></div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

describe('<Game />', () => {
  it('should render the components', () => {
    renderWithTheme(<Game {...props} />)
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(2)
    expect(screen.getByTestId(/mock gallery/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock productinfo/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock textcontent/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock gamedetails/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images.', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId(/mock gallery/i)).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId(/mock gallery/i).parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId(/mock gallery/i).parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('image', { name: /cover/i })
    expect(cover).toHaveStyle({
      backgroundImage: 'url(background-img.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
