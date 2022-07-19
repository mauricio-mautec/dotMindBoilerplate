import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'
import mockOrders from './mock'

import OrdersList from '.'

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('components/ProductItem', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProductItem" />
  }
}))

describe('<OrdersList />', () => {
  it('should render the product items', () => {
    renderWithTheme(
      <OrdersList items={mockOrders} labelOrdersList="Orders List" />
    )
    expect(
      screen.getByRole('heading', { name: /Orders List/i })
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ProductItem')).toHaveLength(2)
    //expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the empty state', () => {
    renderWithTheme(<OrdersList labelOrdersList="OrdersList" />)
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
