/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'

const Div = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    width: 60%;
    background-color: white;
`

const FormWrapper = ({ children }: {children: JSX.Element | JSX.Element[]}): JSX.Element => {
    return (
    <Div>
        {children}
    </Div>
    )
}

export {FormWrapper}