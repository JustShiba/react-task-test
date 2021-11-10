import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { LogInPage } from './LogInPage/LogInPage'
import { SignUpPage } from './SignUpPage/SignUpPage'
import { UsersPage } from './UsersPage/UsersPage'
// import { NoLogIn } from './NoLogIn/NoLogIn'
import { ProfilePage } from './ProfilePage/ProfilePage'
import { AllPostsPage } from './PostsPage/AllPostsPage'
import { checkLogIn__START } from '../../src/redux/auth/authReducer'
import { NoPage } from './NoPage/NoPage'
import { PrivateRoute } from './PrivateRoute'


export const Pages = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkLogIn__START())
    }, [dispatch])

    return (
        <PagesContainer>
            <PagesWrapper>
                <Switch>
                    <PrivateRoute exact path="/" component={NoPage}/>
                    <PrivateRoute path='/users' component={UsersPage} />
                    <PrivateRoute path='/posts' exact component={AllPostsPage} />
                    <PrivateRoute path='/profile' component={ProfilePage} />
                    <PrivateRoute path='/user' component={ProfilePage} />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Redirect from="*" to="/" />
                </Switch>
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

