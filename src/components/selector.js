import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  background: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
  border-radius: .5rem;
  outline: none;
  cursor: pointer;

  .test{
    background: red;
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
