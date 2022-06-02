import { Open } from './Open'
import { useTrans } from 'ui/_hooks/useTrans'
import * as yup from 'yup'
import { pushProposal } from 'src/database/PushProposal'
import { OpenDataType } from './types'
import { useForm } from 'ui/_hooks/useForm'

export const OpenController = () => {
  const trans = useTrans('open')

  const validationSchema = yup.object({
    title: yup
      .string()
      .trim()
      .required(trans('error_required_male_femenine', { fieldName: trans('label_talk-title') })),
    description: yup
      .string()
      .trim()
      .required(trans('error_required_female', { fieldName: trans('label_description') })),
    duration: yup
      .string()
      .trim()
      .required(trans('error_required_female', { fieldName: trans('label_duration') })),
    projector: yup
      .string()
      .trim()
      .required(trans('error_required_male', { fieldName: `campo del ${trans('label_projector')}` })),
    fullName: yup
      .string()
      .trim()
      .required(trans('error_required_male', { fieldName: trans('label_fullName') })),
    email: yup
      .string()
      .email(trans('error_incorrect_male', { fieldName: trans('label_email') }))
      .required(trans('error_required_male', { fieldName: trans('label_email') }))
  })

  const initialValues: OpenDataType = {
    title: '',
    description: '',
    fullName: '',
    email: '',
    projector: '',
    duration: ''
  }

  const durationValues = [
    { value: '15', label: "15'" },
    { value: '45', label: "45'" }
  ]

  const projectorValues = [
    { value: 'si', label: trans('label_afirmation') },
    { value: 'no', label: trans('label_negation') }
  ]

  const message = {
    sending: trans('toast_sending'),
    success: trans('toast_success'),
    error: trans('toast_error')
  }

  const { formState, formStateOpen, snackMessage, handleClose, onFormSubmit } = useForm<OpenDataType>({
    message,
    asyncFunc: (values: OpenDataType) =>
      pushProposal({ ...values, projector: values.projector === 'si' ? true : false }),
    resetFormProps: initialValues
  })

  return (
    <Open
      {...{
        trans,
        formState,
        formStateOpen,
        snackMessage,
        handleClose,
        onFormSubmit,
        validationSchema,
        initialValues,
        durationValues,
        projectorValues
      }}
    />
  )
}
