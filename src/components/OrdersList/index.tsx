import Empty from 'components/Empty'
import Heading from 'components/Heading'
import ProductItem, { ProductItemProps } from 'components/ProductItem'
import * as S from './styles'

export type OrdersListProps = {
  labelOrdersList?: string
  items?: ProductItemProps[]
}

const OrdersList = ({ labelOrdersList, items }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" size="small">
      {labelOrdersList}
    </Heading>

    {items?.length ? (
      items?.map((item) => <ProductItem key={item.title} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasHomeLink
        labelHomeLink="Go Home"
        descriptionColor="black"
        imgSrc="/img/empty.svg"
        imgAlt="A man playing games in a couch"
      />
    )}
  </S.Wrapper>
)

export default OrdersList
