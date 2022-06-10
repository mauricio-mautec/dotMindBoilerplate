import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'
import items from './mock'

const handlerPayment = jest.fn()

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    //const { container } =
    renderWithTheme(
      <PaymentOptions
        handlePayment={handlerPayment}
        label="PaymentOptions"
        cards={items}
      />
    )
    expect(screen.getByText(/paymentoptions/i)).toBeInTheDocument()
    expect(screen.getByText(/4325/i)).toBeInTheDocument()
    expect(screen.getByText(/4326/i)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the selected card when clicking on the label', async () => {
    //const { container } =
    renderWithTheme(
      <PaymentOptions
        handlePayment={handlerPayment}
        label="PaymentOptions"
        cards={items}
      />
    )

    userEvent.click(screen.getByText(/4325/i))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions
        handlePayment={handlePayment}
        label="PaymentOptions"
        cards={items}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions
        handlePayment={handlePayment}
        label="PaymentOptions"
        cards={items}
      />
    )
    userEvent.click(screen.getByText(/4325/i))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
