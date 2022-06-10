import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProductItem from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Read Dead Redemption 2',
  price: 'R$ 215,00'
}
describe('<ProductItem />', () => {
  it('should render the Items', () => {
    // const { container } =
    renderWithTheme(<ProductItem {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByText(props.price)).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Item with download link', () => {
    const downloadLink = 'http://link'

    renderWithTheme(<ProductItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the Item with payment info', () => {
    const paymentInfo = {
      flag: 'mastercar',
      img: '/img/cards/mastercard.png',
      number: '*** *** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    renderWithTheme(<ProductItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
