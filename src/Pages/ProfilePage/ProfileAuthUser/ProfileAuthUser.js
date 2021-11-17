import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {
    deleteUserStart,
    getDataCurrentPersonStart,
} from '../../../../src/redux/auth/authReducer'
import { Loader } from '../../../../src/components/Loader/Loader'
import { PostsPage } from '../../PostsPage/PostsPage'
import { AddPost } from './AddPost/AddPost'
import {
    Box,
    DeleteBtn,
    Line,
    ProfilePageContainer,
    H2,
    Phone,
    Email,
    InpBox2,
    ChangeBtn,
    Marge,
} from '../styled'
import { selectUserId } from '../../../../src/redux/users/usersReducer'
import { ChangeInf } from './ChangeInf/ChangeInf';


export const ProfileAuthUser = ({ user }) => {
    const dispatch = useDispatch()
    const stateAuthorization = useSelector(state => state.authorization)
    const { isAuthorized } = stateAuthorization
    const { email, nickname, phone, posts, userId } = stateAuthorization.personalInformationUser
    const loadingAuthorization = stateAuthorization.loading
    const [ifChangeInformation, setIfChangeInformation] = useState(false)

    useEffect(() => {
        if (user) {
            dispatch(selectUserId(user))
        } else {
            dispatch(selectUserId(userId))
        }

        if (isAuthorized) dispatch(getDataCurrentPersonStart())
    }, [dispatch, userId, user, isAuthorized])

    return (
        <ProfilePageContainer>
            {loadingAuthorization ?
                <Loader /> :
                <>
                    <H2>{nickname ? `Personal information: ${nickname}` : 'Your Nickname: '}</H2>
                    <Email>{email}</Email>
                    <Box>
                        <Phone>{phone}</Phone>
                        <InpBox2>
                            <ChangeBtn onClick={() => setIfChangeInformation(!ifChangeInformation)}>
                                {nickname ? `Change information` : `Add information`}
                            </ChangeBtn>
                            <DeleteBtn onClick={() => dispatch(deleteUserStart())}>Delete account</DeleteBtn>
                        </InpBox2>
                    </Box>
                </>
            }
            <Marge />
            {ifChangeInformation ? <ChangeInf nickname={nickname} phone={phone} /> : null}
            <Line />
            <AddPost />
            <Line />
            {loadingAuthorization ? <Loader /> : <PostsPage posts={posts} nickname={nickname} currentUser={'authUser'} />}
        </ProfilePageContainer>
    )
}

