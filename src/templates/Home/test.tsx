import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import productsMock from 'components/CardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home, { HomeTemplateProps } from '.'

const props: HomeTemplateProps = {
  banners: bannerMock,
  newProducts: productsMock,
  mostPopularHighlight: highlightMock,
  mostPopularProducts: productsMock,
  upcommingProducts: productsMock,
  upcommingHighlight: highlightMock,
  upcommingMoreProducts: productsMock,
  freeProducts: productsMock,
  freeHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/mock bannerslider/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
  })
})
