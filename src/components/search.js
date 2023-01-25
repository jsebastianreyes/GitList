import styled from 'styled-components'
import { ButtonRounded } from './button'
import Icon from './icon'

const SearchStyled = styled.div`
   grid-area: search;

  position: sticky;
  /* inset-inline-end: 1rem; */
  inset-block-end: 2rem;
  
`

function Search({ setModal }) {
  function handleClick() {
    setModal(true)
  }
  return (
    <SearchStyled onClick={handleClick}>
      <ButtonRounded icon={<Icon name="search" size={24} />} />
    </SearchStyled>
  )
}

export default Search
