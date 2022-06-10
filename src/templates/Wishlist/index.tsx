import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import ProductCard, { ProductCardProps } from 'components/ProductCard'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  label: string
  games?: ProductCardProps[]
  recommendedGames: ProductCardProps[]
  recommendedHighlight: HighlightProps
}
const Wishlist = ({
  label = 'Wishlist',
  games = [],
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        {label}
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <ProductCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your whishlist appear here"
          descriptionColor="white"
          imgSrc="/img/empty.svg"
          imgAlt="A gamer in a couch playing videogame"
          hasHomeLink
          labelHomeLink="Go back to store"
        />
      )}

      <Divider />
    </Container>

    <Showcase
      heading={{
        children: 'You may like these games',
        lineLeft: true,
        lineColor: 'secondary',
        color: 'white'
      }}
      highlight={recommendedHighlight}
      cardslider={{ items: recommendedGames }}
    ></Showcase>
  </Base>
)

export default Wishlist
