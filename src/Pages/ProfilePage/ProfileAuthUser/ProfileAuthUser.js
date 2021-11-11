import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {
    changeNickInp,
    changePhoneInp,
    deleteUser__START,
    getDataCurrentPersone__START,
    setNick__START,
    setPhone__START
} from '../../../../src/redux/auth/authReducer'
import { Loader } from '../../../../src/components/Loader/Loader'
import { PostsPage } from '../../PostsPage/PostsPage'
import { AddPost } from './AddPost/AddPost'
import {
    Box,
    Btn,
    DeleteBtn,
    InpBox,
    InpBox2,
    CustomInp,
    CustomInp2,
    Line,
    ProfilePageContainer,
    H2,
    Phone,
    Email
} from '../styled'
import { selectUserId } from '../../../../src/redux/users/usersReducer'


export const ProfileAuthUser = ({ user }) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.authorization)
    const { auth } = state
    const { email, nickname, phone, posts, userId } = state.personalInf
    const phoneInp = state.userInfInp.phone
    const nickInp = state.userInfInp.nickName
    const loading = state.loading

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
                    <InpBox>
                        <H2>{nickname ? `Personal information: ${nickname}` : 'Your Nickname: '}</H2>
                        <CustomInp
                            value={nickInp}
                            onChange={(e) => {
                                dispatch(changeNickInp(e.target.value))
                            }}
                        />
                        <Btn onClick={() => {
                            dispatch(setNick__START())
                        }}>{nickname ? 'change nick' : 'add nick'}</Btn>
                    </InpBox>
                    <Email>{email}</Email>
                    <Box>
                        <InpBox2>
                            <Phone>{phone}</Phone>
                            <CustomInp2
                                value={phoneInp}
                                onChange={(e) => {
                                    dispatch(changePhoneInp(e.target.value))
                                }}
                            />
                            <Btn onClick={() => {
                                dispatch(setPhone__START())
                            }}>{phone ? 'change phone' : 'add phone'}</Btn>
                        </InpBox2>
                        <DeleteBtn
                            onClick={() => {
                                dispatch(deleteUser__START())
                            }}
                        >DELETE ACCOUNT</DeleteBtn>
                    </Box>
                </>}
            <Line />
            <AddPost />
            <Line />
            {loading ? <Loader /> : <PostsPage posts={posts} nickname={nickname} curUser={'authUser'} />}
        </ProfilePageContainer>
    )
}

