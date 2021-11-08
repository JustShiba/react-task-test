import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import Loader from '../../Loader'
import { changeInpPass, changeInpEmail, signUp__START } from '../../../redux/reducers/logSignReducer'
import {
    LogSignBox,
    LogInInp,
    Title,
    LogSignBtn,
    H2,
    Paragraph,
} from '../LogInPage/styled'


export const SignUpPage = () => {
    const dispatch = useDispatch()
    const [isSign, setIsSign] = useState(false)
    const { email, password } = useSelector(state => state.authorization.userInfInp)
    const { loading } = useSelector(state => state.authorization)

    return (
        <LogSignBox>
            {loading ?
                <Loader /> :
                !isSign ?
                    <>
                        <H2>Sign Up</H2>
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
                        <Paragraph>If you already have account, you can <Link to={'./login'}>Log in</Link></Paragraph>
                        <LogSignBtn onClick={(e) => {
                            e.preventDefault()
                            setIsSign(!isSign)
                            dispatch(signUp__START())
                        }}>Sign Up</LogSignBtn>
                    </> :
                    <H2>Please, confirm registration on your mail</H2>
            }
        </LogSignBox>
    )
}
