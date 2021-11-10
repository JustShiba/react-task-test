import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { LogInPage } from './LogInPage/LogInPage'
import { SignUpPage } from './SignUpPage/SignUpPage'
import { UsersPage } from './UsersPage/UsersPage'
import { NoLogIn } from './NoLogIn/NoLogIn'
import { ProfilePage } from './ProfilePage/ProfilePage'
import { AllPostsPage } from './PostsPage/AllPostsPage'
import { checkLogIn__START } from '../../redux/reducers/logSignReducer'


export const Pages = () => {
    const state = useSelector(state => state);

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(checkLogIn__START())
    }, [dispatch])

    const { auth } = state.authorization

    return (
        <PagesContainer>
            <PagesWrapper>
                <Route path='/login' component={LogInPage}/>
                <Route path='/signup' component={SignUpPage}/>
                {auth ? 
                <>
                    <Route path='/users' component={UsersPage}/>
                    <Route path='/posts' exact component={AllPostsPage}/>
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

