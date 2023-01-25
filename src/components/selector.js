import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  background: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
  border-radius: .5rem;
  outline: none;
  cursor: pointer;
`

function Selector({ children }) {
  return (
    <SelectorStyled>
      {children}
    </SelectorStyled>
  )
}

export default Selector
