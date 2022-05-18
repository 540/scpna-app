/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'

import { colors } from '../../../_styles'

const PeopleImageDiv = styled.div`
    height: 20%;
    width: 100%;

    background-color: blue;

    border-style: solid;
    border-radius: 0 0 27px 27px;
    `

const HeaderWrapper = (): JSX.Element => {
    return (<PeopleImageDiv>
    </PeopleImageDiv>)
}

export {HeaderWrapper}