import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LogSignPage from './LogSignPage'
import PostsPage from './PostsPage'
import UsersPage from './UsersPage'
import NoLogIn from './NoLogIn'
import ProfilePage from './ProfilePage'


export const Pages = () => {
    const { auth } = useSelector(state => state.authorization);
    return (
        <PagesContainer>
            <PagesWrapper>
                <Route path='/loginSignup' component={LogSignPage}/>
                {auth ? 
                <>
                    <Route path='/users' component={UsersPage}/>
                    <Route path='/posts' component={() => <PostsPage allPostsOrNot={true}/>}/>
                    <Route path='/profile' component={ProfilePage}/>
                    <Route path='/user' component={ProfilePage}/>
                </>:
                <>
                    <Route path='/' exact component={NoLogIn}/>
                    <Route path='/users' component={NoLogIn}/>
                    <Route path='/posts' component={NoLogIn}/>
                    <Route path='/profile' component={NoLogIn}/>
                    <Route path='/user' component={NoLogIn}/>
                </>
                }
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

