import CartList, { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import { ProductCardProps } from 'components/ProductCard'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import Empty from 'components/Empty'

import * as S from './styles'

export type CartProps = {
  labelCart: string
  recommendedGames: ProductCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>
const Cart = ({
  labelCart,
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          {labelCart}
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is Empty"
            description="Go back to store and explore great games and offers"
            descriptionColor="white"
            imgSrc="/img/empty.svg"
            imgAlt="a gamer in a couch playing games"
            hasHomeLink
            labelHomeLink="Go back to store"
          />
        )}

        <Divider />
      </Container>
      <Showcase
        heading={{
          children: 'You my like these Games',
          color: 'white',
          lineLeft: true,
          lineColor: 'secondary'
        }}
        highlight={recommendedHighlight}
        cardslider={{ items: recommendedGames, color: 'white' }}
      />
    </Base>
  )
}

export default Cart
