import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/CardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cartlistMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

import Cart, { CartProps } from '.'
import React, { ReactNode } from 'react'
import { EmptyProps } from 'components/Empty'

const emptyCartProps: EmptyProps = {
  title: 'A simple title',
  description: 'A simple description',
  descriptionColor: 'white',
  imgSrc: '/img/empty.svg',
  imgAlt: 'A gamer in a couch playing videogame'
}

const props: CartProps = {
  labelCart: 'My Cart',
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock,
  items: cartlistMock,
  total: '430,00',
  cards: cardsMock,
  emptyCart: emptyCartProps
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock CartList" />
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentOptions" />
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render the sections', () => {
    //const { container } =
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: props.labelCart })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Base')).toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    //const { container } =
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(
      screen.getByRole('heading', { name: props.labelCart })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
