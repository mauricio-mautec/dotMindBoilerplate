/* eslint-disable @next/next/no-img-element */
import { Add, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { useState } from 'react'
import * as S from './styles'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

export type PaymentOptionsProps = {
  label?: string
  cards?: PaymentCard[]
  handlePayment: () => void
}

const PaymentOptions = ({
  label,
  cards,
  handlePayment
}: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom lineColor="primary" color="black" size="small">
          {label}
        </Heading>
        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}
          <S.AddCard role="botton">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue Shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy Now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
