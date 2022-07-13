import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import RadioButton from '.'
import userEvent from '@testing-library/user-event'

import items from './mock'

const onGetResult = jest.fn()

describe('<RadioButton />', () => {
  it('should render the heading', () => {
    renderWithTheme(<RadioButton items={items} getResult={onGetResult} />)
    expect(screen.getByText(/ano/i)).toBeInTheDocument()
  })

  it('should call getResult function', async () => {
    renderWithTheme(<RadioButton items={items} getResult={onGetResult} />)
    expect(onGetResult).not.toHaveBeenCalled()

    const RB = screen.getByText(/modelo/i)
    userEvent.click(RB)

    await waitFor(() => {
      expect(onGetResult).toHaveBeenCalledTimes(1)
    })
    expect(onGetResult).toHaveBeenCalledWith('2')
  })
})
