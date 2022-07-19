import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import dados from './mock'

import ExploreSidebar from '.'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'

import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should render the heading', () => {
    //const { container } =
    renderWithTheme(<ExploreSidebar items={dados} onFilter={jest.fn} />)
    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()

    //expect(container.firstChild).toMatchSnapshot()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={dados} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={dados} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={dados}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', async () => {
    const onFilter = jest.fn()

    const filterParams = { windows: true, sort_by: 'low-to-high' }
    renderWithTheme(
      <ExploreSidebar
        initialValues={filterParams}
        items={dados}
        onFilter={onFilter}
      />
    )

    await userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith(filterParams)
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={dados} onFilter={onFilter} />)

    await userEvent.click(screen.getByLabelText(/windows/i))
    await userEvent.click(screen.getByLabelText(/low to high/i))

    await userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })

  it('should altern between radio options', async () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={dados} onFilter={onFilter} />)

    await userEvent.click(screen.getByLabelText(/low to high/i))
    await userEvent.click(screen.getByLabelText(/high to low/i))

    await userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  it('should open/close sidebar when filtering on mobile', async () => {
    const { container } = renderWithTheme(
      <ExploreSidebar items={dados} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width: 768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    await userEvent.click(screen.getByLabelText(/open filters/i))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    await userEvent.click(screen.getByLabelText(/close filters/i))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
