/* eslint-disable prettier/prettier */
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { colors } from 'ui/_styles'
import styled from '@emotion/styled'

interface Props {
    value?: string
}

const StyledButton = styled(Button)({
    ".MuiButton-root": {
      color: colors.secondary,
      backgroundColor: colors.primary
    },
    ".MuiButton-text": {
        color: colors.secondary,
    }
});

export const GoldButton = ({ value = '' }: Props) => (
    <StyledButton variant="contained" size="small" endIcon={<SendIcon />}>{value}</StyledButton>
)