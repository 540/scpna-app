import { Open } from './Open'
import { useTrans } from 'ui/_hooks/useTrans'
import * as yup from 'yup'
import { pushProposal } from 'src/database/PushProposal'
import { OpenDataType } from './types'
import { useForm } from 'ui/_hooks/useForm'

export const OpenController = () => {
  const trans = useTrans('open')

  const validationSchema = yup.object({
    title: yup.string().trim().required(trans('error_talk-title_required')),
    description: yup.string().trim().required(trans('error_description_required')),
    duration: yup.string().trim().required(trans('error_duration_required')),
    projector: yup.string().trim().required(trans('error_projector_required')),
    fullName: yup.string().trim().required(trans('error_fullName_required')),
    email: yup.string().email(trans('error_email_invalid')).required(trans('error_email_required'))
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
