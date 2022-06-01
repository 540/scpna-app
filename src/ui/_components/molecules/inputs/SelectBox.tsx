import { ErrorMessage } from 'formik'
import { ErrorFormElementWrapper } from '../../'
import { ErrorDiv, GoldSelectBox, SelectBoxProps } from '../../atoms'

type Props = SelectBoxProps & { alignItems?: 'flex-start' | 'center' | 'flex-end' }

export const SelectBox = ({
  title = 'Selecciona',
  options = [{ value: 'op1', text: 'Opcion 1' }],
  alignItems = 'center',
  value,
  onChange,
  name,
  error
}: Props) => {
  return (
    <ErrorFormElementWrapper alignItems={alignItems}>
      <GoldSelectBox title={title} options={options} value={value} onChange={onChange} name={name} error={error} />
      <ErrorMessage name={name as string}>{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage>
    </ErrorFormElementWrapper>
  )
}
