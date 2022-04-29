import { Container } from 'components/Container'
import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import Highlight, { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import CardSlider from 'components/CardSlider'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newProducts: ProductCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularProducts: ProductCardProps[]
  upcommingProducts: ProductCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreProducts: ProductCardProps[]
  freeProducts: ProductCardProps[]
  freeHighlight: HighlightProps
}
const Home = ({
  banners,
  newProducts,
  mostPopularHighlight,
  mostPopularProducts,
  upcommingProducts,
  upcommingHighlight,
  upcommingMoreProducts,
  freeProducts,
  freeHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <CardSlider items={newProducts} color="black" />
      </Container>{' '}
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <CardSlider items={mostPopularProducts} color="white" />
      </S.SectionMostPopular>

      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>
        <CardSlider items={upcommingProducts} />
        <Highlight {...upcommingHighlight} />
        <CardSlider items={upcommingMoreProducts} />
      </S.SectionMostPopular>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>
        <Highlight {...freeHighlight} />
        <CardSlider items={freeProducts} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
