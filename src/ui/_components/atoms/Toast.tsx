import React from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const Toast = ({
  toastOpen,
  handleToastClose,
  content,
  severity = 'success',
  duration = 6000
}: {
  toastOpen: boolean
  handleToastClose: (event: React.SyntheticEvent | Event, reason?: string) => void
  content: string
  severity?: 'error' | 'warning' | 'info' | 'success'
  duration?: number
}) => {
  return (
    <Snackbar open={toastOpen} autoHideDuration={duration} onClose={handleToastClose} action="deshacer">
      <Alert onClose={handleToastClose} severity={severity} sx={{ width: '100%' }}>
        {content}
      </Alert>
    </Snackbar>
  )
}
