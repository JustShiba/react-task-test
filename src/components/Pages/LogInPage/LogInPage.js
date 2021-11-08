import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../Loader'
import { changeInpPass, changeInpEmail, logIn__START } from '../../../redux/reducers/logSignReducer'
import {
    LogSignBox,
    LogInInp,
    Title,
    LogSignBtn,
    H2,
    Paragraph,
} from './styled'
import { Link } from 'react-router-dom'


export const LogInPage = () => {
    const dispatch = useDispatch();
    const { email, password } = useSelector(state => state.authorization.userInfInp)
    const { loading } = useSelector(state => state.authorization)
    return (
        <LogSignBox>
            {loading ?
                <Loader /> :
                <>
                    <H2>Log in</H2>
                    <Title>Email:</Title>
                    <LogInInp
                        value={email}
                        onChange={(e) => {
                            dispatch(changeInpEmail(e.target.value))
                        }
                        } />
                    <Title>Password:</Title>
                    <LogInInp
                        type='password'
                        value={password}
                        onChange={(e) => {
                            dispatch(changeInpPass(e.target.value))
                        }}
                    />
                    <Paragraph>If you have no account, you should <Link to={'./signup'}>Sign up</Link></Paragraph>
                    <LogSignBtn onClick={(e) => {
                        e.preventDefault()
                        dispatch(logIn__START())
                    }}>Log In</LogSignBtn>
                </>
            }
        </LogSignBox>
    )
}

