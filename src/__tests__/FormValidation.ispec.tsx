import { fireEvent, render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AskPage from '../../pages/ask'

describe('form', () => {
  const talks = [
    { text: 'Opcion 1', value: 'v1' },
    { text: 'Opcion 2', value: 'v2' },
    { text: 'Opcion 3', value: 'v3' }
  ]

  it('select displays properties on click', async () => {
    //cleanup is done for us
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
    //cleanup is done for us
    render(<AskPage talks={talks} />)
    const select = screen.getByRole('button', { name: /t-label_talk/i })

    await userEvent.click(select)
    const listBox = screen.getByRole('listbox')

    const options = within(listBox).getAllByRole('option')

    fireEvent(
      options[2],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    await waitFor(() => {
      expect(select.textContent).toBe('Opcion 3')
    })
  })

  it.todo('form is filled properly', async () => {
    const talks = [
      { text: 'Opcion 1', value: 'v1' },
      { text: 'Opcion 2', value: 'v2' },
      { text: 'Opcion 3', value: 'v3' }
    ]

    render(<AskPage talks={talks} />)

    const arbitraryName = 'I am the name'
    const arbitraryEmail = 'I am the email'
    const arbitraryQuestion = 'I am the question'

    const nameInput = screen.getByRole('textbox', {
      name: /t-label_name/i
    })
    const emailInput = screen.getByRole('textbox', {
      name: /t-label_email/i
    })
    const questionInput = screen.getByRole('textbox', {
      name: /t-label_question/i
    })
    const select = screen.getByRole('button', { name: /t-label_talk/i })

    await userEvent.type(nameInput, arbitraryName)
    await userEvent.type(emailInput, arbitraryEmail)
    await userEvent.type(questionInput, arbitraryQuestion)
    await userEvent.click(select)

    const listBox = screen.getByRole('listbox')

    //on hold until we are able to select an option from the select

    expect(nameInput.value).toBe(arbitraryName)
    expect(emailInput.value).toBe(arbitraryEmail)
    expect(questionInput.value).toBe(arbitraryQuestion)
  })
})
