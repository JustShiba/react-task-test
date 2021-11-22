import { Link } from 'react-router-dom';

import { LightBtn } from 'components/Header/LogSign/LogSign';

export const Profile = () => {
    return (
        <Link to="/profile">
            <LightBtn>Profile</LightBtn>
        </Link>
    );
};
