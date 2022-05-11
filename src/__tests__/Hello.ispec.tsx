import { render, screen } from '@testing-library/react'
import HomePage from '../../pages'

describe('Hello test', () => {
  it('renders hello', () => {
    render(<HomePage />)

    expect(screen.getByText('t-app_name')).toBeDefined()
  })
})
