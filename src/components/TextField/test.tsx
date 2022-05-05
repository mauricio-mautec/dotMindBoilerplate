import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { wait } from '@testing-library/user-event/dist/types/utils'
import { Email } from 'styled-icons/material-outlined'
import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('should render with a Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with a Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Renders a disabled TextField', () => {
    renderWithTheme(<TextField disabled label="MAUTEC" data-testid="mautec" />)

    expect(screen.getByTestId('mautec')).toHaveAttribute('disabled')
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'this is the new text'
    await userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    )
    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should render a error message', () => {
    const { container } = renderWithTheme(
      <TextField
        label="TextField"
        labelFor="TextField"
        id="TextField"
        wrong="Ops..something is wrong"
      />
    )

    expect(screen.getByText('Ops..something is wrong')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'

    await userEvent.type(input, text)

    waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', async () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    await userEvent.tab()
    expect(input).toHaveFocus()
  })
})
