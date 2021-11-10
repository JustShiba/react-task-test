import styled from "styled-components"

export const NoPage = () => {
    return (
        <NoPageBox>
            <Span>404</Span>
            <Err>error</Err>
            <Err>Page not found</Err>
        </NoPageBox>
    )
}

const NoPageBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

const Span = styled.span`
    font-size: 100px;
    color: white;
`

const Err = styled.div`
    font-size: 25px;
    color: white;
    text-transform: uppercase;
`