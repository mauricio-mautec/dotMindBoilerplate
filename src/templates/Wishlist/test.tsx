import '../../../.jest/match-media-mock'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Wishlist, { WishlistTemplateProps } from '.'

import gamesMock from 'components/CardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props: WishlistTemplateProps = {
  label: 'Wishlist',
  games: gamesMock,
  recommendedGames: gamesMock.slice(0, 5),
  recommendedHighlight: highlightMock
}

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('it should render the Showcase and the Heading', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /Wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/mock showcase/i)).toBeInTheDocument()
    expect(screen.getAllByAltText(/population zero/i)).toHaveLength(6)
  })
})
