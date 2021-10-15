import styled from 'styled-components';

import UsersPage from './UsersPage';

const PagesContainer = styled.div`
    width: 100%;
    height: 1500px;
    background-color: #22256f;
    margin-top: 50px;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PagesWrapper = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
`

const H2 = styled.h2`
    color: white;
    padding-bottom: 15px;
`

export const Pages = () => {
    return (
        <PagesContainer>
            <H2>Page title</H2>
            <PagesWrapper>
                <UsersPage/>
            </PagesWrapper>
        </PagesContainer>
    )
}