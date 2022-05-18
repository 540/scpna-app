/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'

import { colors } from '../../../_styles'

const Div = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    background-color: ${colors.background};
    border-width: 1px;
    border-style: solid;
    border-radius: 27px 27px 0 0;

    padding: 4px;
 
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