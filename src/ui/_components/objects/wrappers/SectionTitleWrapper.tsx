/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'
import { Text } from 'ui/_components'

const Div = styled.div`
    display: flex;

    width: 100%;

    min-height: 70px;
    align-items: center;
    justify-content: center;
`

const SectionTitleWrapper = ( {children : title} : {children: JSX.Element} ): JSX.Element => {
    return (
    <Div>
        <Text color='black' size='big' variant='subtitle1' fontFamily='Basic' bold>
            {title}
        </Text>
    </Div>
    )
}

export {SectionTitleWrapper}