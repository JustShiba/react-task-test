import styled from 'styled-components'
import { Route } from 'react-router-dom';

import LogSignPage from './LogSignPage'
import PostsPage from './PostsPage'
import UsersPage from './UsersPage'


export const Pages = () => {
    return (
        <PagesContainer>
            <H2>Page title</H2>
            <PagesWrapper>
                <Route path='/users' component={UsersPage}/>
                <Route path='/posts' component={PostsPage}/>
                <Route path='/loginSignup' component={LogSignPage}/>
            </PagesWrapper>
        </PagesContainer>
    )
}

const PagesContainer = styled.div`
    width: 100%;
    background-color: #22256f;
    margin-top: 50px;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PagesWrapper = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
`

const H2 = styled.h2`
    color: white;
    padding-bottom: 15px;
    font-size: 30px;
`
