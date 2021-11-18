import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../Header/Header';
import { LogInPage } from '../../pages/LogInPage/LogInPage';
import { SignUpPage } from '../../pages/SignUpPage/SignUpPage';
import { UsersPage } from '../../pages/UsersPage/UsersPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { AllPostsPage } from '../../pages/PostsPage/AllPostsPage';
import { checkLogInStart } from '../../../src/redux/auth/authReducer';
import { PrivateRoute } from './PrivateRoute';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export function App() {
    const { isAuthorized } = useSelector((state) => state.authorization);
    const dispatch = useDispatch();
    const errorAuth = useSelector((state) => state.authorization.errorInformation);
    const errorUser = useSelector((state) => state.users.errorInformation);
    const errorPost = useSelector((state) => state.posts.errorInformation);

    useEffect(() => {
        dispatch(checkLogInStart());
    }, [dispatch]);

    return (
        <Router>
            <Header />
            {(errorAuth.error || errorUser.error || errorPost.error) && (
                <ErrorMessage errorText={errorAuth.errorText || errorUser.errorText || errorPost.errorText} />
            )}
            <PagesContainer>
                <PagesWrapper>
                    <Switch>
                        <PrivateRoute exact path="/" component={ProfilePage} />
                        <PrivateRoute path="/users" component={UsersPage} />
                        <PrivateRoute path="/posts" exact component={AllPostsPage} />
                        <PrivateRoute path="/profile" component={ProfilePage} />
                        <PrivateRoute path="/user" component={ProfilePage} />
                        {isAuthorized && <Redirect from="*" to="/profile" />}
                        <Route path="/login" component={LogInPage} />
                        <Route path="/signup" component={SignUpPage} />
                        <Redirect from="*" to="/" />
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
`;

const PagesWrapper = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
`;
