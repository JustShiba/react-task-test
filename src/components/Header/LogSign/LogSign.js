import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const LogSign = () => {
    return (
        <div>
            <Link to='/loginSignup'>
                <LogInBtn>
                    Log In
                </LogInBtn>
            </Link>
            <Link to='/loginSignup'> 
                <SignUpBtn>
                    Sign Up
                </SignUpBtn>
            </Link>
        </div>
    )
}

const LogInBtn = styled.button`
    border-radius: 0px;
    border: none;
    letter-spacing: 2px;
    font-size: 13px;
    font-family: 'Titillium Web',Helvetica,Arial,Lucida,sans-serif!important;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #1b1f50;
    padding: 7px 20px;
    transition: 200ms;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #4328b7;
    }
`

const SignUpBtn = styled(LogInBtn)`
    background-color: #4328b7;  
    margin-left: 10px;
    &:hover {
        background-color: #1b1f50;
    }
`
