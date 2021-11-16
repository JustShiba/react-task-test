import { useDispatch } from 'react-redux'

import { logOutReducer } from '../../../redux/auth/authReducer'
import { SignUpBtn as ProfileBtn } from '../LogSign/LogSign'
import { USER__ID, USER__TOKEN } from '../../../redux/variables/variables';


export const LogOut = () => {
    const dispatch = useDispatch()

    return (
        <ProfileBtn onClick={() => {
            localStorage.removeItem(USER__TOKEN)
            localStorage.removeItem(USER__ID)
            dispatch(logOutReducer())
        }}>Log out</ProfileBtn>
    )
}