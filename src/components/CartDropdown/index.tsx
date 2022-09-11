import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { EmptyProps } from 'components/Empty'
import { ProductItemProps } from 'components/ProductItem'
import * as S from './styles'

export type CartDropdownProps = {
  items?: ProductItemProps[]
  total?: string
  emptyCart: EmptyProps
}
const CartDropdown = ({
  items = [],
  total = '0',
  emptyCart
}: CartDropdownProps) => {
  return (
    <S.Wrapper>
      <Dropdown title={<CartIcon qtyItems={items.length} />}>
        <CartList items={items} total={total} emptyCart={emptyCart} />
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
