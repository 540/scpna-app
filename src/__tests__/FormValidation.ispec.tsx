import { render, screen, within, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AskPage from '../../pages/ask'
import '@testing-library/jest-dom'

describe('form', () => {
  const talks = [
    { text: 'Opcion 1', value: 'v1' },
    { text: 'Opcion 2', value: 'v2' },
    { text: 'Opcion 3', value: 'v3' }
  ]

  it('select displays properties on click', async () => {
    render(<AskPage talks={talks} />)
    const select = screen.getByRole('button', { name: /t-label_talk/i })

    await userEvent.click(select)

    const options = screen.getAllByRole('option')
    const optionsText = options.map(elem => elem.textContent)

    talks.forEach(elem => {
      expect(optionsText).toContain(elem.text)
    })
  })

  it('choose option from select', async () => {
    render(<AskPage talks={talks} />)
    const select = screen.getByRole('button', { name: /t-label_talk/i })

    await userEvent.click(select)
    const listBox = screen.getByRole('listbox')

    const option = within(listBox).getAllByRole('option')

    await userEvent.click(option[2])

    await waitForElementToBeRemoved(listBox)
    await waitFor(() => {
      expect(select.textContent).toBe(talks[2].text)
    })
  })

  it('form is filled properly', async () => {
    render(<AskPage talks={talks} />)

    const arbitraryName = 'I am the name'
    const arbitraryEmail = 'I am the email'
    const arbitraryQuestion = 'I am the question'

    const nameInput = screen.getByRole('textbox', {
      name: /t-label_name/i
    }) as HTMLInputElement
    const emailInput = screen.getByRole('textbox', {
      name: /t-label_email/i
    }) as HTMLInputElement
    const questionInput = screen.getByRole('textbox', {
      name: /t-label_question/i
    }) as HTMLInputElement
    const select = screen.getByRole('button', { name: /t-label_talk/i })

    await userEvent.type(nameInput, arbitraryName)
    await userEvent.type(emailInput, arbitraryEmail)
    await userEvent.type(questionInput, arbitraryQuestion)
    await userEvent.click(select)

    const listBox = screen.getByRole('listbox')

    const option = within(listBox).getAllByRole('option')

    await userEvent.click(option[2])

    await waitForElementToBeRemoved(listBox)

    await waitFor(() => {
      expect(select.textContent).toBe(talks[2].text)
    })
    expect(nameInput.value).toBe(arbitraryName)
    expect(emailInput.value).toBe(arbitraryEmail)
    expect(questionInput.value).toBe(arbitraryQuestion)
  })
})
