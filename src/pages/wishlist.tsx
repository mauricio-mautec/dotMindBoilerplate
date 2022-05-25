import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/CardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props}></Wishlist>
}

export async function getStaticProps() {
  return {
    props: {
      label: 'Wishlist',
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
