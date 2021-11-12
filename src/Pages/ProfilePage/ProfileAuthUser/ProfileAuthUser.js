import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {
    deleteUser__START,
    getDataCurrentPersone__START,
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
    Marge
} from '../styled'
import { selectUserId } from '../../../../src/redux/users/usersReducer'
import { ChangeInf } from './ChangeInf/ChangeInf';


export const ProfileAuthUser = ({ user }) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.authorization)
    const { auth } = state
    const { email, nickname, phone, posts, userId } = state.personalInf
    const loading = state.loading
    const [ changeInf, setChangeInf ] = useState(false)

    useEffect(() => {
        if (user) {
            dispatch(selectUserId(user))
        } else {
            dispatch(selectUserId(userId))
        }

        if (auth) dispatch(getDataCurrentPersone__START())
    }, [dispatch, userId, user, auth])
    
    return (
        <ProfilePageContainer>
            {loading ?
                <Loader /> :
                <>
                    <H2>{nickname ? `Personal information: ${nickname}` : 'Your Nickname: '}</H2>
                    <Email>{email}</Email>
                    <Box>
                        <Phone>{phone}</Phone>
                        <InpBox2>
                            <ChangeBtn onClick={() => setChangeInf(!changeInf)}>
                                {nickname ?  `Change information` : `Add information`}
                            </ChangeBtn>
                            <DeleteBtn onClick={() => dispatch(deleteUser__START())}>Delete account</DeleteBtn>
                        </InpBox2>
                    </Box>
                </>}
            <Marge />
            {changeInf ? <ChangeInf nickname={nickname} phone={phone}/> : null}
            <Line />
            <AddPost />
            <Line />
            {loading ? <Loader /> : <PostsPage posts={posts} nickname={nickname} curUser={'authUser'} />}
        </ProfilePageContainer>
    )
}

