import Cart, { CartProps } from 'templates/Cart'

import gamesMock from 'components/CardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cartlistMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      labelCart: 'My Cart',
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: cartlistMock,
      total: '430,00',
      cards: cardsMock
    }
  }
}
