import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import Showcase from 'components/Showcase'

import * as S from './styles'
import BannerSlider from 'components/BannerSlider'

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
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Showcase
          heading={{ lineLeft: true, lineColor: 'secondary', children: 'News' }}
          cardslider={{ items: newProducts, color: 'black' }}
        />
      </Container>
    </S.SectionNews>

    <S.SectionMostPopular>
      <Showcase
        heading={{
          lineLeft: true,
          lineColor: 'secondary',
          color: 'white',
          children: 'Most Popular'
        }}
        highlight={{ ...mostPopularHighlight }}
        cardslider={{ items: mostPopularProducts, color: 'white' }}
      />
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Showcase
        heading={{
          lineLeft: true,
          lineColor: 'secondary',
          color: 'white',
          children: 'Upcomming'
        }}
        cardslider={{ items: upcommingProducts }}
      />
      <Showcase
        highlight={{ ...upcommingHighlight }}
        cardslider={{ items: upcommingMoreProducts }}
      />
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Showcase
        heading={{
          lineLeft: true,
          lineColor: 'secondary',
          color: 'white',
          children: 'Free Games'
        }}
        highlight={{ ...freeHighlight }}
        cardslider={{ items: freeProducts }}
      />
    </S.SectionFreeGames>
  </Base>
)

export default Home
