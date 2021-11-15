import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'


import { Header } from '../Header/Header'
import { LogInPage } from '../../Pages/LogInPage/LogInPage'
import { SignUpPage } from '../../Pages/SignUpPage/SignUpPage'
import { UsersPage } from '../../Pages/UsersPage/UsersPage'
import { ProfilePage } from '../../Pages/ProfilePage/ProfilePage'
import { AllPostsPage } from '../../Pages/PostsPage/AllPostsPage'
import { checkLogInStart } from '../../../src/redux/auth/authReducer'
import { PrivateRoute } from './PrivateRoute'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'


export function App() {
    const { auth } = useSelector(state => state.authorization)
    const dispatch = useDispatch()
    const errorAuth =  useSelector(state => state.authorization.errorInf)
    const errorUser =  useSelector(state => state.users.errorInf)
    const errorPost =  useSelector(state => state.posts.errorInf)
    
    useEffect(() => {
        dispatch(checkLogInStart())
    }, [dispatch])

    return (
        <Router>
            <Header />
            {(errorAuth.error === true) || (errorUser.error === true) || (errorPost.error === true) ? 
                <ErrorMessage 
                    errorAuth={errorAuth.errorText}
                    errorUser={errorUser.errorText}
                    errorPost={errorPost.errorText}
                /> :
                    null
            }
            <PagesContainer>
                <PagesWrapper>
                    <Switch>
                        <PrivateRoute exact path='/' component={ProfilePage} />
                        <PrivateRoute path='/users' component={UsersPage} />
                        <PrivateRoute path='/posts' exact component={AllPostsPage} />
                        <PrivateRoute path='/profile' component={ProfilePage} />
                        <PrivateRoute path='/user' component={ProfilePage} />
                        {auth ? <Redirect from='*' to='/profile' /> : null}
                        <Route path='/login' component={LogInPage} />
                        <Route path='/signup' component={SignUpPage} />
                        <Redirect from='*' to='/' />
                    </Switch>
                </PagesWrapper>
            </PagesContainer>
        </Router>
    );
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
