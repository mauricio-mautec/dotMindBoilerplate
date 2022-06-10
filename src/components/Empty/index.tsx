import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  descriptionColor: 'black' | 'white'
  hasHomeLink?: boolean
  labelHomeLink?: string
  imgSrc: string
  imgAlt: string
}
const Empty = ({
  title,
  description,
  descriptionColor,
  hasHomeLink,
  labelHomeLink,
  imgSrc = '/img/empty.svg',
  imgAlt = 'A gamer in a couch playing videogame'
}: EmptyProps) => (
  <S.Wrapper>
    <S.Image src={imgSrc} alt={imgAlt} role="image" />

    <S.Title>{title}</S.Title>

    <S.Description color={descriptionColor}>{description}</S.Description>

    {hasHomeLink && labelHomeLink && (
      <Link href="/" passHref>
        <Button as="a">{labelHomeLink}</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
