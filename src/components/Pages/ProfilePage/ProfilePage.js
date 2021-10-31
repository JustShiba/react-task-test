import { useSelector } from 'react-redux'

import ProfileAuthUser from './ProfileAuthUser'
import ProfileNonAuthUser from './ProfileNonAuthUser'

export const ProfilePage = () => {
    
    const { otherUser } = useSelector(state => state.users)

    return (
        <>
            {otherUser ? <ProfileNonAuthUser/> : <ProfileAuthUser/>}
        </>
    )
}
