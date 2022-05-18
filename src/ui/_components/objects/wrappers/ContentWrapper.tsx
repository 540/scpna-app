/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: space-between;

    background-color: purple;
`

const ContentWrapper = ({ children }: {children: JSX.Element | JSX.Element[]}): JSX.Element => {
    return (<Div>
        {children}
    </Div>)
}

export {ContentWrapper}