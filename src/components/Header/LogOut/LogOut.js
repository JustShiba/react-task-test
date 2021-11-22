import { useDispatch } from 'react-redux';

import { logOutReducer } from 'redux/auth/authReducer';
import { LightBtn } from 'components/Header/LogSign/LogSign';
import { USER__ID, USER__TOKEN } from 'redux/constances/constances';

export const LogOut = () => {
    const dispatch = useDispatch();

    return (
        <LightBtn
            onClick={() => {
                localStorage.removeItem(USER__TOKEN);
                localStorage.removeItem(USER__ID);
                dispatch(logOutReducer());
            }}
        >
            Log out
        </LightBtn>
    );
};
