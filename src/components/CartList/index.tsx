import * as S from './styles'

import ProductItem, { ProductItemProps } from 'components/ProductItem'
import Link from 'next/link'
import Button from 'components/Button'
import Empty, { EmptyProps } from 'components/Empty'

export type CartListProps = {
  items: ProductItemProps[]
  total: string
  hasButton?: boolean
  emptyCart: EmptyProps
}

const CartList = ({
  items = [],
  total,
  hasButton = false,
  emptyCart
}: CartListProps) => {
  const isEmpty = items.length == 0
  return (
    <S.Wrapper isEmpty={isEmpty}>
      {items.length ? (
        <>
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
        </>
      ) : (
        <>
          <Empty
            hasHomeLink={emptyCart?.hasHomeLink ? true : false}
            title={emptyCart?.title}
            description={emptyCart?.description}
            labelHomeLink={emptyCart?.labelHomeLink}
            descriptionColor={emptyCart?.descriptionColor}
            imgSrc={emptyCart?.imgSrc}
            imgAlt={emptyCart?.imgAlt}
          />
        </>
      )}
    </S.Wrapper>
  )
}

export default CartList
