// import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// import { addusers, apiCall } from '../../../redux/reducers/userssReducer'

export const LogInPage = () => {
    // const dispatch = useDispatch();
    
    return(
        <LogInBox>
            <Title>Email:</Title>
            <LogInInp/>
            <Title>Password:</Title>
            <LogInInp/>
            <LogInBtn  onClick={(e) => {
                // e.preventDefault()
                
                // dispatch(apiCall())
            }}>Log In</LogInBtn>
        </LogInBox>
    )
}

    const LogInBox = styled.form`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    
    const LogInInp = styled.input`
        margin: 0px 25px 25px 25px;
        height: 50px;
        border-radius: 30px;
        padding-left: 25px;
        font-size: 25px;
        border: none;
    `
    
    const Title = styled.p`
        color: white;
        margin-top: 25px;
        font-size: 20px;
        font-weight: 400;
        margin-block-start: 0;
        margin-block-end: 0;
        & span {
            font-size: 20px;
            font-weight: 500;
        }
    `
    
    const LogInBtn = styled.button`
        margin-top: 30px;
        width: 200px;
        padding: 25px;
        border-radius: 0px;
        border: none;
        letter-spacing: 2px;
        font-size: 13px;
        font-family: 'Titillium Web',Helvetica,Arial,Lucida,sans-serif!important;
        font-weight: 700;
        text-transform: uppercase;
        background-color: #1b1f50;
        transition: 200ms;
        color: white;
        cursor: pointer;
        &:hover {
            background-color: #4328b7;
        }
    `