/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import Ribbon, { RibbonProps } from 'components/Ribbon'
import {
  FavoriteBorder,
  Favorite,
  AddShoppingCart
} from 'styled-icons/material-outlined'
import formatPrice from 'utils/format.price'
import * as S from './styles'
/*
 1- determine os dados necessarios e crie o props, configure o componente
 para receber o props e comece a definir a estrutura
 */

export type ProductCardProps = {
  title: string
  subtitle: string
  img: string
  price: number
  promotionalPrice?: number
  background?: 'black' | 'gray' | 'white' | 'none'
  favorite?: boolean
  onFav?: () => void
} & RibbonProps

const ProductCard = ({
  title,
  subtitle,
  img,
  background = 'none',
  price,
  promotionalPrice = 0,
  favorite = false,
  onFav,
  ribbonLabel,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: ProductCardProps) => {
  const precoFinal = promotionalPrice ? promotionalPrice : price
  return (
    <S.Wrapper>
      <S.ImageBox backgroundColor={background}>
        <img src={img} alt={title} />
      </S.ImageBox>
      {!!ribbonLabel && (
        <Ribbon
          ribbonLabel={ribbonLabel}
          ribbonSize={ribbonSize}
          ribbonColor={ribbonColor}
        />
      )}
      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Info>
        <S.FavButton role="button" onClick={onFav}>
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          )}
          <S.Price>{formatPrice(precoFinal)}</S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProductCard
