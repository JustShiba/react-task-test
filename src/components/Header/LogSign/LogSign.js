import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { apiCallUsers } from '../../../redux/reducers/usersReducer'

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

export const LogSign = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <LogInBtn onClick={() => {
                dispatch(apiCallUsers());
            }}>Log In</LogInBtn>
            <SignUpBtn>Sign Up</SignUpBtn>
        </div>
    )
}