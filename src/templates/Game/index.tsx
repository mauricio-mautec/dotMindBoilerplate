import Base from 'templates/Base'

import ProductInfo, { ProductInfoProps } from 'components/ProductInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'

import * as S from './styles'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

export type GameTemplateProps = {
  cover: string
  gameInfo: ProductInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: ProductCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: ProductCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Main>
      <S.SectionGameInfo>
        <ProductInfo {...gameInfo} />
      </S.SectionGameInfo>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails headingLabel="Game Details" {...details} />
      </S.SectionGameDetails>

      <Showcase
        heading={{
          children: 'Upcoming',
          lineLeft: true,
          lineColor: 'secondary',
          color: 'white'
        }}
        highlight={upcomingHighlight}
        cardslider={{ items: upcomingGames }}
      />
      <Showcase
        heading={{
          children: 'You my like these games',
          lineLeft: true,
          lineColor: 'secondary',
          color: 'white'
        }}
        cardslider={{ items: recommendedGames }}
      />
    </S.Main>
  </Base>
)

export default Game
