import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../Loader'
import { changeInpPass, changeInpEmail, logIn__START } from '../../../redux/reducers/logSignReducer'
import {
    LogSignBox,
    LogInInp,
    Title,
    LogSignBtn,
    H2,
} from './styled'


export const LogInPage = () => {
    const dispatch = useDispatch();
    const { email, password } = useSelector(state => state.authorization.userInfInp)
    const { loading } = useSelector(state => state.authorization)
    return (
        <LogSignBox>
            {loading ?
                <Loader /> :
                <>
                    <H2>Log in / Sign Up</H2>
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
                    <LogSignBtn onClick={(e) => {
                        e.preventDefault()
                        dispatch(logIn__START())
                    }}>Log In</LogSignBtn>
                </>
            }
        </LogSignBox>
    )
}

