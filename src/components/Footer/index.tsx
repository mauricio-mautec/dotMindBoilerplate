import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'
import Link from 'next/link'

export type FooterProps = {
  instagram?: string
  twitter?: string
  youtube?: string
  facebook?: string
  sacmsg?: string
  sacemail?: string
  copywright?: string
}

export type FooterArgs = {
  item: FooterProps
}
// href=
// href=
// href=

const Footer = ({
  instagram = 'https://www.instagram.com/won-games',
  twitter = 'https://www.twitter.com/won-games',
  youtube = 'https://www.youtube.com/won-games',
  facebook = 'https://www.facebook.com',
  sacemail = 'mailto:"sac@wongames.com"',
  sacmsg = 'Atendimento Consumidor',
  copywright = 'Won Games 2020 © All rights reserved.'
}: FooterProps) => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href={sacemail}>{sacmsg}</a>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href={instagram} target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>
          <a href={twitter} target="_blank" rel="noopenner, noreferrer">
            Twitter
          </a>
          <a href={youtube} target="_blank" rel="noopenner, noreferrer">
            Youtube
          </a>
          <a href={facebook} target="_blank" rel="noopenner, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>{copywright}</S.Copyright>
  </S.Wrapper>
)

export default Footer
