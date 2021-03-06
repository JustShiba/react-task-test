import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { logInStart } from 'redux/auth/authReducer';
import { LogSignBox, LogInInp, Title, LogSignBtn, H2, Paragraph } from './styled';

export const LogInPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { loading, isAuthorized } = useSelector((state) => state.authorization);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setPassword('');
        setEmail('');
    }, []);

    location.pathname = `${isAuthorized ? `profile` : location.pathname}`;

    return (
        <LogSignBox>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <H2>Log in</H2>
                    <Title>Email:</Title>
                    <LogInInp
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <Title>Password:</Title>
                    <LogInInp
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <Paragraph>
                        If you have no account, you should <Link to={'/signup'}>Sign up</Link>
                    </Paragraph>
                    <LogSignBtn
                        onClick={() => {
                            dispatch(logInStart({ email, password }));
                        }}
                    >
                        Log In
                    </LogSignBtn>
                </>
            )}
        </LogSignBox>
    );
};
