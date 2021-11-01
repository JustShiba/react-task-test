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

    return (
        <ProfilePageContainer>
            {loading?
            <Loader/>:
            <>
                <InpBox>
                    <H2>{state.currentUserInf.nickname ? 
                        `Personal information: ${state.currentUserInf.nickname}`: 
                        `Noname`}</H2>
                </InpBox>
                <Email>{state.currentUserInf.email}</Email>  
                <Box>            
                    <InpBox2>
                        <Phone>{state.currentUserInf.phone ? state.currentUserInf.phone : `No phone number`}</Phone>
                    </InpBox2>
                </Box>
            </>}
            <Line/>
            <PostsPage/>
        </ProfilePageContainer>
    )
}

