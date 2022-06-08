import { ErrorMessage } from 'formik'
import { ErrorFormElementWrapper } from '../../'
import { ErrorDiv, GoldSelectBox, SelectBoxProps } from '../../atoms'

type Props = SelectBoxProps & { alignItems?: 'flex-start' | 'center' | 'flex-end' }

export const SelectBoxFormik = ({
  title = 'Selecciona',
  options = [{ value: 'op1', text: 'Opcion 1' }],
  alignItems = 'center',
  value,
  onChange,
  name,
  error,
  displayError
}: Props) => {
  return (
    <ErrorFormElementWrapper alignItems={alignItems}>
      <GoldSelectBox
        title={title}
        options={options}
        value={value}
        onChange={onChange}
        name={name}
        error={error}
        displayError={displayError}
      />
      <ErrorMessage name={name as string}>{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage>
    </ErrorFormElementWrapper>
  )
}
