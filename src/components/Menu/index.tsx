import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import UserDropdown from 'components/UserDropdown'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import { EmptyProps } from 'components/Empty'

// Configurar aqui o EmptyCart
const emptyCartProps: EmptyProps = {
  title: 'A simple title',
  description: 'description: imgSrc: /img/empty.svg',
  descriptionColor: 'black',
  imgSrc: '/img/empty.svg',
  imgAlt: 'A gamer in a couch playing videogame'
}
type MenuProps = {
  username?: string
}
const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          {!!username && <S.MenuLink href="#">Wishlist</S.MenuLink>}
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>

        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown emptyCart={emptyCartProps} />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart" passHref>
              <a>
                <CartIcon />
              </a>
            </Link>
          </MediaMatch>
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          {!!username && (
            <>
              <Link href="/profile/me" passHref>
                <S.MenuLink>My account</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>
        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign In
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
