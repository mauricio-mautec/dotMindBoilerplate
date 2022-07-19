import { ShoppingCart } from '@styled-icons/material-outlined'
import * as S from './styles'

export type CartIconProps = {
  qtyItems?: number
}
const CartIcon = ({ qtyItems = 0 }: CartIconProps) => (
  <S.Wrapper>
    {qtyItems > 0 && <S.Badge aria-label="Cart Items">{qtyItems}</S.Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </S.Wrapper>
)

export default CartIcon
