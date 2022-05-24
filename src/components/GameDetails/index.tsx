import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type Platforms = 'windows' | 'linux' | 'mac'

export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  headingLabel?: string
  developer: string
  releaseDate: string
  platforms: Platforms[]
  publisher: string
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  headingLabel,
  developer,
  releaseDate,
  platforms,
  publisher,
  rating = 'BR0',
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} color="white" />,
    windows: <Windows title="Windows" size={18} color="white" />,
    mac: <Apple title="Mac" size={18} color="white" />
  }

  const date = new Date(releaseDate)
  const labelRate = rating === 'BR0' ? 'FREE' : rating.replace('BR', '') + '+'
  const labelGenres = genres.join(' / ')

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineColor="secondary" lineLeft color="white">
          {headingLabel}
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(date)}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconWrapper>
            {platforms.map((icon: Platforms, idx) => (
              <S.Icon key={idx}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>{labelRate}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{labelGenres}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
