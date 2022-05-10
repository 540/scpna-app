import { render, screen } from '@testing-library/react'

describe('Hello test', () => {
  it('renders hello', () => {
    render(<div>Hello</div>)

    expect(screen.getByText('Hello')).toBeDefined()
  })
})
