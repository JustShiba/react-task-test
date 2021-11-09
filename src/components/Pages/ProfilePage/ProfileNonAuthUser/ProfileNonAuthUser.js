import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getDataCurrentUser__START } from '../../../../redux/reducers/usersReducer'
import Loader from '../../../Loader'
import PostsPage from '../../PostsPage'
import {
    Box,
    InpBox,
    InpBox2,
    Line,
    ProfilePageContainer,
    H2,
    Phone,
    Email
} from '../styled'


export const ProfileNonAuthUser = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getDataCurrentUser__START())
    }, [dispatch])
    
    const state = useSelector(state => state.users)
    const loading = state.loading
    const otherUser = state.otherUser    
    const { nickname, phone, email, posts } = state.currentUserInf 

    return (
        <ProfilePageContainer>
            {loading?
                <Loader/>:
                <>
                    <InpBox>
                        <H2>{nickname ? `Personal information: ${nickname}`: `Noname`}</H2>
                    </InpBox>
                    <Email>{email}</Email>  
                    <Box>            
                        <InpBox2>
                            <Phone>{phone ? phone : `No phone number`}</Phone>
                        </InpBox2>
                    </Box>
                </>
            }
            <Line/>
            {loading ? <Loader/> : <PostsPage posts={posts} nickname={nickname} auth={otherUser} curUser={'nonAuthUser'}/>}
        </ProfilePageContainer>
    )
}

