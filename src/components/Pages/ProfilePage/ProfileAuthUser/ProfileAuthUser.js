import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { 
    changeNickInp, 
    changePhoneInp,
    deleteUser__START,
    getDataCurrentPersone__START,
    setNick__START,
    setPhone__START
} from '../../../../redux/reducers/logSignReducer'
import Loader from '../../../Loader'
import PostsPage from '../../PostsPage'
import AddPost from './AddPost'

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
import { selectUserId } from '../../../../redux/reducers/usersReducer'


export const ProfileAuthUser = () => {
    
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const stateAuth = state.authorization
    const { email, nickname, phone, posts } = stateAuth.personalInf
    const phoneInp = stateAuth.userInfInp.phone
    const nickInp = stateAuth.userInfInp.nickName
    const loading = stateAuth.loading

    useEffect(() => {
        dispatch(selectUserId(state.authorization.personalInf.userId))
        dispatch(getDataCurrentPersone__START())
    }, [dispatch, state.authorization.personalInf.userId])

    return(
        <ProfilePageContainer>
            {loading?
            <Loader/>:
            <>
                <InpBox>
                    <H2>{nickname ? `Personal information: ${nickname}`  : 'Your Nickname: '}</H2>
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
                        }}>{phone ?  'change phone' :'add phone'}</Btn>
                    </InpBox2>
                    <DeleteBtn
                        onClick={() => {
                            dispatch(deleteUser__START())
                        }}
                        >DELETE ACCAUNT</DeleteBtn>
                </Box>
            </>}
            <Line/>
            <AddPost/>
            <Line/>
            {loading ? <Loader/> : <PostsPage posts={posts} nickname={nickname} curUser={'authUser'}/>}
        </ProfilePageContainer>
    )
}

