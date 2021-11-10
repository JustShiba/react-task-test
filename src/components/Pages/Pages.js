import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { LogInPage } from './LogInPage/LogInPage'
import { SignUpPage } from './SignUpPage/SignUpPage'
import { UsersPage } from './UsersPage/UsersPage'
import { NoLogIn } from './NoLogIn/NoLogIn'
import { ProfilePage } from './ProfilePage/ProfilePage'
import { AllPostsPage } from './PostsPage/AllPostsPage'
import { checkLogIn__START } from '../../redux/reducers/logSignReducer'
import { NoPage } from './NoPage/NoPage'


export const Pages = () => {
    const { auth } = useSelector(state => state.authorization);

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(checkLogIn__START())
    }, [dispatch])

    return (
        <PagesContainer>
            <PagesWrapper>
                {auth ? 
                    <Switch>
                        <Route path='/login' component={LogInPage}/>
                        <Route path='/signup' component={SignUpPage}/>
                        <Route path='/users' component={UsersPage}/>
                        <Route path='/posts' exact component={AllPostsPage}/>
                        <Route path='/profile' component={ProfilePage}/>
                        <Route path='/user' component={ProfilePage}/>
                    </Switch>:
                    <Switch>
                        <Route path='/login' component={LogInPage}/>
                        <Route path='/signup' component={SignUpPage}/>
                        <Route path='/' exact component={NoLogIn}/>
                        <Route path='/users' component={NoLogIn}/>
                        <Route path='/posts' component={NoLogIn}/>
                        <Route path='/profile' component={NoLogIn}/>
                        <Route path='/user' component={NoLogIn}/>
                        <Route path='*' component={NoPage}/>
                    </Switch>
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

