import { render, screen, within, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AskPage from '../../pages/ask'
import '@testing-library/jest-dom'
import { useForm } from './oneTimeMocks/useForm'
import { QuestionType } from 'ui/Ask/types'
import * as yup from 'yup'
import { Ask } from 'ui/Ask/Ask'
import { useTrans } from 'ui/_hooks/useTrans'

describe('form tests', () => {
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

  it('form is sent properly', async () => {
    const pushQuestion = jest.fn()
    const trans = useTrans('ask')

    const validationSchema = yup.object({
      name: yup.string().trim().required(trans('error_name_required')),
      email: yup.string().email(trans('error_email_invalid')).required(trans('error_email_required')),
      question: yup.string().trim().required(trans('error_question_required')),
      talk: yup.mixed().notOneOf(['0'], trans('error_talk_required'))
    })

    const initialValues = { name: '', email: '', talk: '0', question: '' }

    const message = {
      sending: trans('toast_sending'),
      success: trans('toast_success'),
      error: trans('toast_error')
    }

    const { formState, formStateOpen, snackMessage, handleClose, onFormSubmit, displayError, handleFormSubmit } =
      useForm<QuestionType>({
        message,
        asyncFunc: pushQuestion,
        resetFormProps: initialValues
      })

    render(
      <Ask
        {...{
          talks,
          trans,
          initialValues,
          formState,
          formStateOpen,
          snackMessage,
          handleClose,
          onFormSubmit,
          validationSchema,
          displayError,
          handleFormSubmit
        }}
      />
    )

    const arbitraryName = 'I am the name'
    const arbitraryEmail = 'email@gmail.com'
    const arbitraryQuestion = 'I am the question'
    const arbitraryTalkIndex = 2

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
    const submitButton = screen.getByRole('button', {
      name: /t-label_button/i
    })

    await userEvent.type(nameInput, arbitraryName)
    await userEvent.type(emailInput, arbitraryEmail)
    await userEvent.type(questionInput, arbitraryQuestion)
    await userEvent.click(select)

    const listBox = screen.getByRole('listbox')

    const option = within(listBox).getAllByRole('option')

    await userEvent.click(option[arbitraryTalkIndex])

    await waitForElementToBeRemoved(listBox)

    await waitFor(() => {
      expect(select.textContent).toBe(talks[arbitraryTalkIndex].text)
    })

    await userEvent.click(submitButton)
    await waitFor(() => {
      expect(pushQuestion).toBeCalledWith({
        email: arbitraryEmail,
        name: arbitraryName,
        question: arbitraryQuestion,
        talk: talks[arbitraryTalkIndex].value
      })
    })
  })
})
