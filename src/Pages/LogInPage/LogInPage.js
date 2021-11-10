import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { Loader } from '../../../src/components/Loader/Loader'
import { changeInpPass, changeInpEmail, logIn__START } from '../../../src/redux/reducers/logSignReducer'
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
    const location = useLocation()
    const dispatch = useDispatch()
    const { email, password } = useSelector(state => state.authorization.userInfInp)
    const { loading, auth } = useSelector(state => state.authorization)
    
    location.pathname = `${auth ? `/profile` : location.pathname}`

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
