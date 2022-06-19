/* eslint-disable @next/next/no-img-element */
import Heading from 'components/Heading'
import * as S from './styles'
import { PaymentCard } from 'components/PaymentOptions'

export type CardsListProps = {
  labelCardsList?: string
  cards?: PaymentCard[]
}
const CardsList = ({ cards, labelCardsList = 'My cards' }: CardsListProps) => (
  <S.Wrapper>
    <Heading size="small" lineBottom>
      {labelCardsList}
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </S.Wrapper>
)

export default CardsList
