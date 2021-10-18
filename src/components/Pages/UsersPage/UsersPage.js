import styled from 'styled-components';
import UserCard from './UserCard';

const UsersContainer = styled.div`
    width: 100%;
`
const arrUsers = [1, 2, 3]

export const UsersPage = () => {
    return (
        <UsersContainer>
            {arrUsers.map(item => <UserCard key={item}/>)}
        </UsersContainer>
    )
}