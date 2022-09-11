import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductCard from '.'

const args = {
  title: 'My Product Card',
  subtitle: 'dotMind Development Group',
  img: '/img/product-card.png',
  price: 100,
  promotionalPrice: 0
}
describe('<ProductCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ProductCard {...args} />)

    expect(
      screen.getByRole('heading', { name: args.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: args.subtitle })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: args.title })).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<ProductCard {...args} />)

    const price = screen.getByText('R$ 100,00')
    expect(price).not.toHaveStyleRule('text-decoration', 'line-through')
    expect(price).toHaveStyleRule('color', theme.colors.white)
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render promotional price in label', () => {
    renderWithTheme(<ProductCard {...args} promotionalPrice={50.0} />)

    const fullprice = screen.getByText('R$ 100,00')
    const price = screen.getByText('R$ 50,00')
    expect(fullprice).toHaveStyleRule('text-decoration', 'line-through')
    expect(fullprice).toHaveStyleRule('color', theme.colors.gray)
    expect(price).not.toHaveStyleRule('text-decoration', 'line-through')
    expect(price).toHaveStyleRule('color', theme.colors.white)
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<ProductCard {...args} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })
  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<ProductCard {...args} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <ProductCard
        {...args}
        ribbonLabel="20% OFF"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )
    const ribbon = screen.getByText(/20% off/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ 'background-color': theme.colors.secondary })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
