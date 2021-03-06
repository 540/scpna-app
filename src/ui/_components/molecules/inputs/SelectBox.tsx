import { ErrorFormElementWrapper } from '../../'
import { GoldSelectBox, SelectBoxProps } from '../../atoms'

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
    </ErrorFormElementWrapper>
  )
}
