import { useLocation } from 'react-router';

import { USER__ID } from 'redux/constances/constances';
import { ProfileAuthUser } from './ProfileAuthUser/ProfileAuthUser';
import { ProfileNonAuthUser } from './ProfileNonAuthUser/ProfileNonAuthUser';

export const ProfilePage = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname.indexOf('/profile') === 0 ? (
                <ProfileAuthUser user={localStorage.getItem(USER__ID)} />
            ) : (
                <ProfileNonAuthUser />
            )}
        </>
    );
};
