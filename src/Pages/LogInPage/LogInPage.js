import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link } from 'react-router-dom'

import { Loader } from '../../../src/components/Loader/Loader'
import { 
    // changeInpPass, 
    // changeInpEmail, 
    logIn__START 
} from '../../../src/redux/reducers/logSignReducer'
import {
    LogSignBox,
    LogInInp,
    Title,
    LogSignBtn,
    H2,
    Paragraph,
} from './styled'


export const LogInPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const { loading, auth } = useSelector(state => state.authorization)

    const [ pass, setPass ] = useState('')
    const [ email, setEmail ] = useState('')  
    useEffect(() => {
        setPass('')
        setEmail('')
    }, [])  
    
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
                    <Paragraph>If you have no account, you should <Link to={'./signup'}>Sign up</Link></Paragraph>
                    <LogSignBtn onClick={(e) => {
                        e.preventDefault()
                        dispatch(logIn__START({email, pass}))
                    }}>Log In</LogSignBtn>
                </>
            }
        </LogSignBox>
    )
}

