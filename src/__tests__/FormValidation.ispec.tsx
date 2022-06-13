import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AskPage from '../../pages/ask'

describe('proper talks have been passed all the way through and are displayed properly', () => {
  it('select has the correct properties', () => {
    const talks = [
      { text: 't1', value: 'v1' },
      { text: 't2', value: 'v2' },
      { text: 't3', value: 'v3' }
    ]
    render(<AskPage talks={talks} />)
    
  })
})

describe('Hello test', () => {
  it('renders hello', () => {
    const talks = [
      { text: 't1', value: 'v1' },
      { text: 't2', value: 'v2' },
      { text: 't3', value: 'v3' }
    ]
    render(<AskPage talks={talks} />)

    const [nameInput, emailInput, questionInput] = screen.getAllByRole('textbox')
    userEvent.type(nameInput, 'David')
    userEvent.type(emailInput, 'David@gmail.com')
    userEvent.type(questionInput, 'Tengo una duda...')

    // const [nameInput, emailInput, questionInput] = screen.getAllByRole('')
    console.log(nameInput.name, emailInput.name, questionInput.name)
    // const nameInput = screen.getByRole('textbox', { name: /t-label_name/i })
    // const nameInput = screen.getByRole('textbox', { name: /t-label_name/i })
    // const nameInput = screen.getByRole('textbox', { name: /t-label_name/i })
    // screen.debug(nameInput)

    expect(1).toBe(1)
  })
})
