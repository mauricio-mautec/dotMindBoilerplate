import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Diferent Tails',
  platforms: ['windows', 'mac', 'linux'],
  publisher: 'Walkabout',
  rating: 'BR0',
  releaseDate: '2022-11-21T23:00:00',
  genres: ['Role-playing', 'Narrative']
}
describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails headingLabel="GameDetails" {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails headingLabel="GameDetails" {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails headingLabel="Game Details" {...props} />)

    expect(screen.getByText('Nov 21, 2022')).toBeInTheDocument()
  })

  it('should render the correct rating when BR0', () => {
    renderWithTheme(
      <GameDetails headingLabel="Game Details" {...props} rating="BR0" />
    )

    expect(screen.getByText(/FREE/i)).toBeInTheDocument()
  })

  it('should render the correct rating (18+) when BR18', () => {
    renderWithTheme(
      <GameDetails headingLabel="Game Details" {...props} rating="BR18" />
    )

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render the correct rating (18+) when BR18', () => {
    renderWithTheme(<GameDetails headingLabel="Game Details" {...props} />)

    expect(screen.getByText(/role-playing \/ narrative/i)).toBeInTheDocument()
  })
})
