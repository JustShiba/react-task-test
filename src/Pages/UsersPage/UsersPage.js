import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { UserCard } from './UserCard/UserCard'
import { addUsers__START } from '../../../src/redux/users/usersReducer'
import { Loader } from '../../../src/components/Loader/Loader'


export const UsersPage = () => {
    const state = useSelector(state => state.users)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(addUsers__START())
    }, [dispatch])

    return (
            <UsersContainer>
                <H2>All Users</H2>
                {state.loading ? 
                    <Loader/> : 
                    state.users.map((item) => <UserCard key={item.userId} info={item}/>)
                }
            </UsersContainer>
    )
}

const UsersContainer = styled.div`
    width: 100%;
`

const H2 = styled.h2`
    color: white;
    padding-bottom: 15px;
    font-size: 30px;
`