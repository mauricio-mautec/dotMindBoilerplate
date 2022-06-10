import * as S from './styles'

import ProductItem, { ProductItemProps } from 'components/ProductItem'

export type CartListProps = {
  items: ProductItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <ProductItem key={item.title} {...item} />
    ))}

    <S.Footer>
      Total: <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
