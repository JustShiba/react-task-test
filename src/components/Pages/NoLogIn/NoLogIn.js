import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NoLogIn = () => {
    return (
        <H2>You must <Link to={'./login'}>log in...</Link></H2>
    )
}

const H2 = styled.h2`
    color: white;
    padding-bottom: 15px;
    font-size: 30px;
    & a{
        color: white;
    }
`