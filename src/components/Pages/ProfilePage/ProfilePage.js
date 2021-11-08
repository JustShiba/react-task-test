import { useLocation } from 'react-router'

import ProfileAuthUser from './ProfileAuthUser'
import ProfileNonAuthUser from './ProfileNonAuthUser'


export const ProfilePage = () => {
    const location = useLocation() 

    return (
        <>
            {(location.pathname.indexOf('/profile') === 0) ?
                <ProfileAuthUser/> :
                <ProfileNonAuthUser/>
            }
        </>
    )
}
