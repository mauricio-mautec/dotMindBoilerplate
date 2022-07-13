import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ToggleButton from '.'
import userEvent from '@testing-library/user-event'

const onCheckMock1 = jest.fn()
const onCheckMock2 = jest.fn()

describe('<ToggleButton />', () => {
  it('should render the heading of a small togglebutton', () => {
    renderWithTheme(
      <ToggleButton
        checked
        tag="1"
        label="Ano"
        icon="/img/icons/Icons.svg#Filter"
      />
    )
    const TB = screen.getByText(/ano/i)
    expect(TB).toBeInTheDocument()
    expect(TB.parentElement).toHaveStyle({
      height: '3.5rem',
      width: '13.2rem'
    })
  })

  it('should call onCheck function', async () => {
    renderWithTheme(
      <ToggleButton
        tag="LigarAr"
        label="Test Function"
        onCheck={onCheckMock1}
        icon="/img/icons/Icons.svg#Filter"
      />
    )
    expect(onCheckMock1).not.toHaveBeenCalled()

    const TB = screen.getByText(/test function/i)
    userEvent.click(TB)

    await waitFor(() => {
      expect(onCheckMock1).toHaveBeenCalledTimes(1)
    })
    expect(onCheckMock1).toHaveBeenCalledWith({ checked: true, tag: 'LigarAr' })
  })

  it('should return false after double clicking ToggleButton', async () => {
    renderWithTheme(
      <ToggleButton
        tag="Ligar"
        label="Test2"
        onCheck={onCheckMock2}
        icon="/img/icons/Icons.svg#Filter"
      />
    )

    const TB = screen.getByText(/test2/i)
    userEvent.click(TB)
    userEvent.click(TB)
    await waitFor(() => {
      expect(onCheckMock2).toHaveBeenCalledTimes(2)
    })
    expect(onCheckMock2).toHaveBeenCalledWith({
      checked: false,
      tag: 'Ligar'
    })
  })

  it('should render a medium size ToggleButton', () => {
    renderWithTheme(
      <ToggleButton
        tag="Ventilador"
        label="Ligar Ventilador"
        onCheck={onCheckMock2}
        icon="/img/icons/Icons.svg#Filter"
        size="medium"
      />
    )

    expect(screen.getByText(/ligar ventilador/i).parentElement).toHaveStyle({
      height: '4rem',
      width: '16rem'
    })
  })

  it('should render a large size ToggleButton', () => {
    renderWithTheme(
      <ToggleButton
        tag="Ventilador"
        label="Ligar Ventilador"
        onCheck={onCheckMock2}
        icon="/img/icons/Icons.svg#Filter"
        size="large"
      />
    )

    expect(screen.getByText(/ligar ventilador/i).parentElement).toHaveStyle({
      height: '4.5rem',
      width: '20rem'
    })
  })
})
