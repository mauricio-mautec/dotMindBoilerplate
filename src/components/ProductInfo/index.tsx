import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import { FavoriteBorder, AddShoppingCart } from 'styled-icons/material-outlined'
import formatPrice from 'utils/format.price'
import * as S from './styles'

export type ProductInfoProps = {
  title: string
  description: string
  price: number
}

const ProductInfo = ({ title, description, price }: ProductInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black">
      {title}
    </Heading>
    <S.Description>{description}</S.Description>
    <Ribbon
      ribbonLabel={formatPrice(price)}
      ribbonColor="secondary"
      ribbonSize="small"
    />
    <S.ButtonWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
)

export default ProductInfo
