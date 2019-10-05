import styled from 'styled-components'

import {Link} from 'react-router-dom'


export const Container = styled.section`
    width: ${props => props.fluid ? '100%' : '80%'};
    margin: 0 auto;
`

export const LinkRoute = styled(Link)`
    color: #000;
    background: tomato;
    padding: 10px;
`