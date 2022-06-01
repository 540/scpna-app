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
    name: yup.string().trim().required(trans('error_name_required')),
    last_name: yup.string().trim().required(trans('error_last-name_required')),
    email: yup.string().email(trans('error_email_invalid')).required(trans('error_email_required'))
  })

  const initialValues: OpenDataType = {
    title: '',
    description: '',
    name: '',
    last_name: '',
    email: '',
    projector: false,
    duration: ''
  }

  const message = {
    sending: trans('toast_sending'),
    success: trans('toast_success'),
    error: trans('toast_error')
  }

  const { formState, formStateOpen, snackMessage, handleClose, onFormSubmit } = useForm<OpenDataType>({
    message,
    asyncFunc: pushProposal,
    resetFormProps: initialValues
  })

  return (
    <Open
      {...{ trans, formState, formStateOpen, snackMessage, handleClose, onFormSubmit, validationSchema, initialValues }}
    />
  )
}
