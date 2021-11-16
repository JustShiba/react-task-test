import  styled  from 'styled-components'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'

const arr = ['users', 'posts']

export const NavBar = () => {
    return (
        <List>
            {arr.map(item => (
            <Links key={v4()}>
                <Link to={`../${item}`}>{item.toUpperCase()}</Link>
            </Links>))}
        </List>
    )
}

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding-inline-start: 0;
`

const Links = styled.li`
    display: block;
    margin-right: 13px;
    font-weight: 600;
    & a {
        text-decoration: none;
        color: white;
        transition: 200ms;
        &:hover {
            color: #6e59ca;  
        }
    }
`
