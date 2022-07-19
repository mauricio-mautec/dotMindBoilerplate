import * as S from './styles'

import ProductItem, { ProductItemProps } from 'components/ProductItem'
import Link from 'next/link'
import Button from 'components/Button'

export type CartListProps = {
  items: ProductItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <ProductItem key={item.title} {...item} />
    ))}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>
      {hasButton && (
        <Link href={'/cart'} passHref>
          <Button as="a">Buy it now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList
