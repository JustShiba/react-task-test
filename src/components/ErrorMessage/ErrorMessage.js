
import styled from 'styled-components'

export const ErrorMessage = ({ errorAuth, errorUser, errorPost }) => {

    return (
        <ErrorWrapper>
            <ErrorTitle>Error</ErrorTitle>
            <ErrorBody>
                {errorAuth ? 
                errorAuth : errorUser ? 
                errorUser : errorPost ? 
                errorPost : 'something go wrong'}
            </ErrorBody>
        </ErrorWrapper>
    )
}

const ErrorWrapper = styled.div`
    width: 300px;
    position: absolute;
    top: 65px;
    right: 15px;
    background-color: brown;  
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorTitle = styled.h3`
    color: white;
    margin-block-start: 0.5em;
`

const ErrorBody = styled.p`
    color: white;
    margin-block-start: 0;
`