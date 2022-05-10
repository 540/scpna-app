import { render, screen } from '@testing-library/react'
import Home from '../../pages'

describe('Hello test', () => {
  it('renders hello', () => {
    render(<Home />)

    expect(screen.getByText('Hola Mundo')).toBeDefined()
  })
})
