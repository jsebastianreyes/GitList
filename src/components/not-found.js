import styled from 'styled-components'

const NotFoundStyled = styled.div`
   color: var(--gray-2);
   font: var(--headline2-semi-bold);
   block-size: 7rem;
   display: flex;
   align-items: center;
   justify-content: center;
`

function NotFound() {
   
        return (
            <NotFoundStyled>
             Uppsssss! There are no repositories 😞
            </NotFoundStyled>
        )
    
   
}

export default NotFound
