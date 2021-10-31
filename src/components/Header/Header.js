import { useSelector } from 'react-redux'
import styled from 'styled-components'

import LogSign from './LogSign'
import NavBar from './NavBar'
import Profile from './Profile'

export const Header = () => {
    const { auth } = useSelector(state => state.authorization)

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <NavBar/>
                {auth ? <Profile/> : <LogSign/>}
            </HeaderWrapper>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 50px;
    background-color: #101635;
    border-bottom: 2px solid #4228b7;
    display: flex;
    justify-content: center;
    position: fixed;
    margin-top: -50px;
    z-index: 1;
`

const HeaderWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`


