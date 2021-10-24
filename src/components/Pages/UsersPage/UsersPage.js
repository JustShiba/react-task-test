import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import UserCard from './UserCard'
import { apiCallUsers } from '../../../redux/reducers/usersReducer'
import { useEffect } from 'react'


const UsersContainer = styled.div`
    width: 100%;
`

export const UsersPage = () => {
    const state = useSelector(state => state.users)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(apiCallUsers())
    }, [dispatch])

    return (
        <UsersContainer>
            {state.loading ? 
                <h1>LOADING</h1> : 
                state.users.map((item) => <UserCard key={item.userId} info={item}/>)
            }
        </UsersContainer>
    )
}