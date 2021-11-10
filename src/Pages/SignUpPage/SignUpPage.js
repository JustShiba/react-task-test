import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Loader } from '../../../src/components/Loader/Loader'
import { 
    signUp__START 
} from '../../../src/redux/auth/authReducer'
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
    const { loading, sign } = useSelector(state => state.authorization)

    const [ pass, setPass ] = useState('')
    const [ email, setEmail ] = useState('')  
    useEffect(() => {
        setPass('')
        setEmail('')
    }, [])

    return (
        <LogSignBox>
            {loading ?
                <Loader /> :
                !sign ?
                    <>
                        <H2>Sign Up</H2>
                        <Title>Email:</Title>
                        <LogInInp
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }
                            } />
                        <Title>Password:</Title>
                        <LogInInp
                            type='password'
                            value={pass}
                            onChange={(e) => {
                                setPass(e.target.value)
                            }}
                        />
                        <Paragraph>If you already have account, you can <Link to={'./login'}>Log in</Link></Paragraph>
                        <LogSignBtn onClick={(e) => {
                            e.preventDefault()
                            dispatch(signUp__START({email, pass}))
                        }}>Sign Up</LogSignBtn>
                    </> :
                    <H2>Please, confirm registration on your mail</H2>
            }
        </LogSignBox>
    )
}
