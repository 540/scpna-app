import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AskPage from '../../pages/ask'
describe('form', () => {
  it('select displays properties on click', async () => {
    const talks = [
      { text: 'Opcion 1', value: 'v1' },
      { text: 'Opcion 2', value: 'v2' },
      { text: 'Opcion 3', value: 'v3' }
    ]

    render(<AskPage talks={talks} />)

    const select = screen.getByRole('button', { name: /t-label_talk/i })

    await userEvent.click(select)
    const listBox = screen.getByRole('listbox')

    const options = within(listBox).getAllByRole('option')

    const optionsText = options.map(elem => elem.textContent)

    talks.forEach(elem => {
      expect(optionsText).toContain(elem.text)
    })
  })
})
