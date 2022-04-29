import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import productsMock from 'components/CardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// COLETA DOS DADOS
// ATENÇÃO: métodos get{Static,ServerSide}Props só funcionam em pages
// getStaticProps => gerar estático em build time
// getServerSideProps => gerar via SSR a cada request

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newProducts: productsMock,
      mostPopularHighlight: highlightMock,
      mostPopularProducts: productsMock,
      upcommingProducts: productsMock,
      upcommingHighlight: highlightMock,
      upcommingMoreProducts: productsMock,
      freeProducts: productsMock,
      freeHighlight: highlightMock
    }
  }
}
