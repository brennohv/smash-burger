import { render, screen } from '@testing-library/react'

import Foods from '.'

describe('<Foods />', () => {
  it('should render the heading', () => {
    const { container } = render(<Foods />)

    expect(screen.getByRole('heading', { name: /Foods/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
