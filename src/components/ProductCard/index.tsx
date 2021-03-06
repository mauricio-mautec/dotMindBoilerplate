/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import Ribbon, { RibbonProps } from 'components/Ribbon'
import {
  FavoriteBorder,
  Favorite,
  AddShoppingCart
} from 'styled-icons/material-outlined'
import * as S from './styles'
/*
 1- determine os dados necessarios e crie o props, configure o componente
 para receber o props e comece a definir a estrutura
 */

export type ProductCardProps = {
  title: string
  subtitle: string
  img: string
  price: string
  promotionalPrice?: string
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
  promotionalPrice,
  favorite = false,
  onFav,
  ribbonLabel,
  ribbonSize = 'small',
  ribbonColor = 'primary'
}: ProductCardProps) => (
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
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default ProductCard
