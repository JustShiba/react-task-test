import { Link } from 'react-router-dom'

import { SignUpBtn as ProfileBtn } from '../LogSign/LogSign'


export const Profile = () => {

    return(
        <Link to='/Profile'> 
            <ProfileBtn>Profile</ProfileBtn>
        </Link>
    )
}