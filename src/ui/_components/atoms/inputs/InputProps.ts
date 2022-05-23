export type InputProps = {
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type SelectBoxOptions = {
  value: string
  text: string
}

export type SelectBoxProps = {
  title?: string
  options?: Array<SelectBoxOptions>
  value?: string | number
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
