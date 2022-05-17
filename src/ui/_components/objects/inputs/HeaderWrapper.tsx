/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'

const Div = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 60%;

    background-image: url("https://pbs.twimg.com/profile_banners/720224712626933760/1640334891/600x200");
    background-repeat:no-repeat;
    background-position: center;
    background-size: contain;
`

const HeaderWrapper = (): JSX.Element => {
    return (<Div>
    </Div>)
}

export {HeaderWrapper}