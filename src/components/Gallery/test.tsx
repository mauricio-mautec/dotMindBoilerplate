import '../../../.jest/match-media-mock'

import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'
import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnail as buttons', () => {
    renderWithTheme(<Gallery color="white" items={mockItems.slice(0, 2)} />)
    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)
    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should render open modal', () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} color="black" />)
    // selecionar o Modal
    const modal = screen.getByLabelText('modal')

    // verificar se o Modal está escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // // clicar na imagem e verificar se o modal carregou
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })
  it('should close Modal when ESC is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={mockItems.slice(0, 2)} color="black" />
    )
    // selecionar o Modal
    const modal = screen.getByLabelText('modal')
    // clicar na imagem para abrir o modal
    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i })
    )

    // teclar ESC  para fechar o modal
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open Modal with selected image', async () => {
    renderWithTheme(<Gallery items={mockItems.slice(0, 2)} color="white" />)

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 2/i })
    )

    const img = await screen.findByRole('img', { name: /gallery image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
