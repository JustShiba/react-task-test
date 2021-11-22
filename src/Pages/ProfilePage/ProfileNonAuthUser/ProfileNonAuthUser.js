import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDataCurrentUserStart } from 'redux/users/usersReducer';
import { Loader } from 'components/Loader/Loader';
import { PostsPage } from 'pages/PostsPage/PostsPage';
import { Box, InpBox, InpBox2, Line, ProfilePageContainer, H2, Phone, Email } from '../styled';

export const ProfileNonAuthUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataCurrentUserStart());
    }, [dispatch]);

    const state = useSelector((state) => state.users);
    const loadingUsers = state.loading;
    const isOtherUser = state.isOtherUser;
    const { nickname, phone, email, posts } = state.currentUserInformation;

    return (
        <ProfilePageContainer>
            {loadingUsers ? (
                <Loader />
            ) : (
                <>
                    <InpBox>
                        <H2>{nickname ? `Personal information: ${nickname}` : `Noname`}</H2>
                    </InpBox>
                    <Email>{email}</Email>
                    <Box>
                        <InpBox2>
                            <Phone>{phone ? phone : `No phone number`}</Phone>
                        </InpBox2>
                    </Box>
                </>
            )}
            <Line />
            {loadingUsers ? (
                <Loader />
            ) : (
                <PostsPage posts={posts} nickname={nickname} authorization={isOtherUser} currentUser={'nonAuthUser'} />
            )}
        </ProfilePageContainer>
    );
};
