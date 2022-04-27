import { ArrowBackIos as ArrowLeft } from 'styled-icons/material-outlined'
import { ArrowForwardIos as ArrowRight } from 'styled-icons/material-outlined'

import ProductCard, { ProductCardProps } from 'components/ProductCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type CardSliderProps = {
  items: ProductCardProps[]
  color?: 'black' | 'white'
}

const settings: SliderSettings = {
  arrows: true,
  nextArrow: <ArrowRight aria-label="next product" />,
  prevArrow: <ArrowLeft aria-label="previous product" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

const CardSlider = ({ items, color = 'white' }: CardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default CardSlider
