import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../Loader'
import { changeInpPass, changeInpEmail, signUp__START } from '../../../redux/reducers/logSignReducer'
import {
    LogSignBox,
    LogInInp,
    Title,
    LogSignBtn,
    H2,
} from '../LogInPage/styled'


export const SignUpPage = () => {
    const dispatch = useDispatch();
    const { email, password } = useSelector(state => state.authorization.userInfInp)
    const { loading } = useSelector(state => state.authorization)
    return(
        <LogSignBox>
            {loading ? 
                <Loader/>:
                <>
                    <H2>Sign Up</H2>
                    <Title>Email:</Title>
                    <LogInInp 
                        value={email} 
                        onChange={(e) => {
                            dispatch(changeInpEmail(e.target.value))
                        }
                    }/>
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
                        dispatch(signUp__START())
                    }}>Sign Up</LogSignBtn>
                </>
            }
        </LogSignBox>
    )
}
