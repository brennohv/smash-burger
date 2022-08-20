import { render, screen } from '@testing-library/react'

import FoodCard from '.'

describe('<FoodCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<FoodCard />)

    expect(screen.getByRole('heading', { name: /FoodCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
