import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getDataCurrentPersone__START } from '../../../../redux/reducers/logSignReducer'
import Loader from '../../../Loader'
import { PostsPage } from '../../PostsPage/PostsPage'
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
    const state = useSelector(state => state)
    const stateAuth = state.authorization
    const { email, nickname, phone } = stateAuth.personalInf
    const loading = stateAuth.loading

    useEffect(() => {
        dispatch(getDataCurrentPersone__START())
    }, [dispatch])

    return(
        <ProfilePageContainer>
            {loading?
            <Loader/>:
            <>
                <InpBox>
                    <H2>{nickname ? `Personal information: ${nickname}`  : 'Your Nickname: '}</H2>
                </InpBox>
                <Email>{email}</Email>  
                <Box>            
                    <InpBox2>
                        <Phone>{phone}</Phone>
                    </InpBox2>
                </Box>
            </>}
            <Line/>
            <PostsPage/>
        </ProfilePageContainer>
    )
}

