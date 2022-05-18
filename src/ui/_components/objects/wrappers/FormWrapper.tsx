/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'

import { colors } from '../../../_styles'

const Div = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 60%;
    background-color: ${colors.background};
    padding: 4%;
    justify-content: space-around;
`

const FormWrapper = ({ children }: {children: JSX.Element | JSX.Element[]}): JSX.Element => {
    return (
    <Div>
        {children}
    </Div>
    )
}

export {FormWrapper}