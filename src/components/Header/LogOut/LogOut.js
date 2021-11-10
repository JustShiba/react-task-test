import { useDispatch } from 'react-redux'

import { logOutReducer } from '../../../redux/auth/authReducer'
import { SignUpBtn as ProfileBtn } from '../LogSign/LogSign'


export const LogOut = () => {
    const dispatch = useDispatch()

    return (
        <ProfileBtn onClick={() => {
            localStorage.removeItem(`userToken`)
            localStorage.removeItem(`userId`)
            dispatch(logOutReducer())
        }}>Log out</ProfileBtn>
    )
}