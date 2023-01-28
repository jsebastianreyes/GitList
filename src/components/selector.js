import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  background: var(--buttonBG);
  color: var(--white);
  padding: .5rem 1rem;
  border-radius: .5rem;
  outline: none;
  cursor: pointer;
  flex: 1;

  @media screen and (min-width: 768px) {
    
  }
  @media screen and (prefers-color-scheme: light) {
    background: var(--white);
    color: var(--black);
    border: 1px solid var(--grey);

  }
`

function Selector({ children, onChange }) {
  return (
    <SelectorStyled onChange={onChange}>
      {children}
      
    </SelectorStyled>
  )
}

export default Selector
