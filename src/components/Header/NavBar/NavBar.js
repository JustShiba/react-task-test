import  styled  from 'styled-components'
import { Link } from 'react-router-dom'

const arr = ['users', 'posts']

export const NavBar = () => {
    return (
        <List>
            {arr.map((navItem, index) => (
            <Links key={index}>
                <Link to={`../${navItem}`}>{navItem.toUpperCase()}</Link>
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
