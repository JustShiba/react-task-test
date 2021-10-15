import  styled  from 'styled-components';
import { v4 } from 'uuid';


const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding-inline-start: 0px;
`

const Link = styled.a`
    display: block;
    margin-right: 13px;
    color: white;
    font-weight: 600;
    text-decoration: none;
    transition: 200ms;
    &:hover {
        color: #6e59ca;  
    }
`

const arr = ['Users', 'Posts', 'Comments']

export const NavBar = () => {
    return (
        <List>
            {arr.map(item => (
            <li key={v4()}>
                <Link href='#'>{item}</Link>
            </li>))}
        </List>
    )
}